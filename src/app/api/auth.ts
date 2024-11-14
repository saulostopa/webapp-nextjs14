import type { User } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import type { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

import { env } from '@/configs';

const prisma = new PrismaClient();

const { jwtExpiration, jwtSecrets } = env;

export function generateToken(user: User) {
  return jwt.sign({ userId: user.id }, jwtSecrets, {
    expiresIn: jwtExpiration,
  });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, jwtSecrets) as JwtPayload;
  } catch (error) {
    return null;
  }
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { auth: true },
  });

  if (!user || !user.auth) {
    throw new Error('User not found or no authentication setup');
  }

  const isPasswordValid = await bcrypt.compare(password, user.auth.password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = generateToken(user);

  const decodedToken = verifyToken(token);
  if (!decodedToken || typeof decodedToken.exp !== 'number') {
    throw new Error('Invalid token');
  }

  const expiresAt = new Date(decodedToken.exp * 1000);

  await prisma.session.upsert({
    where: {
      userId_token: {
        userId: user.id,
        token,
      },
    },
    update: {
      expiresAt,
    },
    create: {
      userId: user.id,
      token,
      expiresAt,
    },
  });

  return { token, user };
}
