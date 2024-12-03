import type { Prisma, User } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';
import bcrypt from 'bcryptjs';
import jwt, { type JwtPayload } from 'jsonwebtoken';

import { env } from '@/configs';
import { prisma } from '@/lib/prisma';

import { EmailSenderService } from '../emailSender/service';
import { UserService } from '../user/service';

const { jwtExpiration, jwtSecrets } = env;

export class AuthService {
  userService: UserService;

  emailSenderService: EmailSenderService;

  userRoleRepository: Prisma.UserRoleDelegate<DefaultArgs>;

  sessionRepository: Prisma.SessionDelegate<DefaultArgs>;

  accountsRepository: Prisma.AccountDelegate<DefaultArgs>;

  recoveryTokenRepository: Prisma.RecoveryTokenDelegate<DefaultArgs>;

  constructor() {
    this.userRoleRepository = prisma.userRole;
    this.sessionRepository = prisma.session;
    this.accountsRepository = prisma.account;
    this.recoveryTokenRepository = prisma.recoveryToken;

    this.userService = new UserService();
    this.emailSenderService = new EmailSenderService();
  }

  async login(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new Error('User not found or no authentication setup');
    }
    if (user.sessions.length > 5) {
      throw new Error('Too many sessions');
    }

    const isPasswordValid = await AuthService.validatePassword(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const safeUser = {
      ...user,
      password: undefined,
      sessions: undefined,
      roles: user.roles.map((role) => role.role.name),
    };

    const token = AuthService.generateToken(safeUser);

    const decodedToken = await this.verifyToken(token, true);

    if (!decodedToken || typeof decodedToken.exp !== 'number') {
      throw new Error('Invalid token');
    }

    const expiresAt = new Date(decodedToken.exp * 1000);

    await this.saveUserSession(safeUser.id, token, expiresAt);

    return { token, user: safeUser };
  }

  async generateResetToken(email: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new Error('User not found', {
        cause: { status: 404, message: 'User not found' },
      });
    }

    const token = AuthService.generateNumericToken(5);

    const expiredAt = new Date();
    expiredAt.setHours(expiredAt.getHours() + 1);

    await this.recoveryTokenRepository.upsert({
      where: { userId: user.id },
      update: { id: token, expiredAt },
      create: { id: token, userId: user.id, expiredAt },
    });

    this.emailSenderService.sendEmail(
      email,
      'Password Reset',
      `Your password reset token is: ${token}`,
    );

    return { token, expiredAt };
  }

  static async resetPassword(token: string, password: string) {
    const recoveryToken = await prisma.recoveryToken.findUnique({
      where: { id: token },
      include: { user: true },
    });

    if (!recoveryToken) {
      throw new Error('Invalid token', {
        cause: { status: 404, message: 'Invalid token' },
      });
    }

    if (recoveryToken.expiredAt < new Date()) {
      throw new Error('Token expired', {
        cause: { status: 400, message: 'Token expired' },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: recoveryToken.userId },
      data: { password: hashedPassword },
    });

    await prisma.recoveryToken.delete({ where: { id: token } });
  }

  async saveUserSession(userId: string, token: string, expiresAt: Date) {
    return this.sessionRepository.upsert({
      where: {
        userId_token: { userId, token },
      },
      update: { expiresAt },
      create: { userId, token, expiresAt },
    });
  }

  async verifyToken(token?: string, login?: boolean): Promise<JwtPayload> {
    if (!token) {
      throw new Error('Token not provided', {
        cause: { status: 401, message: 'Token not provided' },
      });
    }

    const decodedToken = jwt.verify(token, jwtSecrets) as JwtPayload;

    const session = await this.sessionRepository.findFirst({
      where: { token },
    });

    if (
      (!login && !session) ||
      !decodedToken ||
      typeof decodedToken !== 'object' ||
      !('userId' in decodedToken)
    ) {
      throw new Error('Invalid token', {
        cause: { status: 401, message: 'Invalid token' },
      });
    }

    return decodedToken;
  }

  static generateToken(user: Partial<User>): string {
    return jwt.sign({ userId: user.id }, jwtSecrets, {
      expiresIn: jwtExpiration,
    });
  }

  static validatePassword(
    inputPassword: string,
    userPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(inputPassword, userPassword);
  }

  static generateNumericToken(length: number): string {
    const min = 10 ** (length - 1);
    const max = 10 ** length - 1;
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
  }
}
