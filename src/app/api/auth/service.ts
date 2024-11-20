import type { Prisma, User } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';
import bcrypt from 'bcryptjs';
import jwt, { type JwtPayload } from 'jsonwebtoken';

import { env } from '@/configs';
import { prisma } from '@/lib/prisma';

const { jwtExpiration, jwtSecrets } = env;

class AuthService {
  userRepository: Prisma.UserDelegate<DefaultArgs>;

  sessionRepository: Prisma.SessionDelegate<DefaultArgs>;

  accountsRepository: Prisma.AccountDelegate<DefaultArgs>;

  constructor() {
    this.userRepository = prisma.user;
    this.sessionRepository = prisma.session;
    this.accountsRepository = prisma.account;
  }

  async login(email: string, password: string) {
    const user = await this.getUserByEmail(email);

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

    const decodedToken = AuthService.verifyToken(token);
    if (!decodedToken || typeof decodedToken.exp !== 'number') {
      throw new Error('Invalid token');
    }

    const expiresAt = new Date(decodedToken.exp * 1000);

    await this.saveUserSession(safeUser.id, token, expiresAt);

    return { token, user: safeUser };
  }

  async resetPassword(email: string) {
    const user = await this.getUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
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

  async getUserByEmail(email: string) {
    return this.userRepository.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        avatar: true,
        firstName: true,
        lastName: true,
        password: true,
        speed: true,
        title: true,
        sessions: true,
        roles: {
          select: {
            role: {
              select: { name: true },
            },
          },
        },
      },
    });
  }

  static verifyToken(token: string): JwtPayload | null {
    try {
      return jwt.verify(token, jwtSecrets) as JwtPayload;
    } catch {
      return null;
    }
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
}

export const service = new AuthService();
