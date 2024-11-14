import { type Role, RoleName, type User, UserTitle } from '@prisma/client';

import prisma from '@/lib/prisma';

import { seed } from './user';

interface SendUser {
  user: Partial<User>;
  passwordHash: string;
  role: Role;
}

export async function seedUsers() {
  const admin = await prisma.role.findUnique({
    where: { name: RoleName.ADMIN },
  });
  const pro = await prisma.role.findUnique({
    where: { name: RoleName.PRO },
  });
  const member = await prisma.role.findUnique({
    where: { name: RoleName.MEMBER },
  });

  if (!admin || !pro || !member) {
    throw new Error('Roles not found');
  }

  const users: SendUser[] = [
    {
      user: {
        email: 'israel.fsantos27@gmail.com',
        firstName: 'Israel',
        lastName: 'Santos',
        title: UserTitle.ADMIN,
      },
      passwordHash:
        '$2a$12$EYw8ffaOSy9hg.s0CiGkA.Iihdr5AfJcZuDE1VjG5F5wIsOBAAl7G',
      role: admin,
    },
  ];

  for (const { user, passwordHash, role } of users) {
    await seed(user, passwordHash, role);
  }
}
