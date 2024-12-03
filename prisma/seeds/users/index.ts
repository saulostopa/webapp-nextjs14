import {
  PrismaClient,
  type Role,
  RoleName,
  type User,
  UserTitle,
} from '@prisma/client';

import { seed } from './user';

const prisma = new PrismaClient();

interface SendUser {
  user: Partial<User>;
  role: Role;
}

export async function seedUsers() {
  const admin = await prisma.role.findUnique({
    where: { name: RoleName.ADMIN },
  });
  const pro = await prisma.role.findUnique({
    where: { name: RoleName.PRO },
  });
  const student = await prisma.role.findUnique({
    where: { name: RoleName.STUDENT },
  });
  const teacher = await prisma.role.findUnique({
    where: { name: RoleName.TEACHER },
  });

  if (!admin || !pro || !student || !teacher) {
    throw new Error('Roles not found');
  }

  const users: SendUser[] = [
    {
      user: {
        email: 'israel.fsantos27@gmail.com',
        firstName: 'Israel',
        lastName: 'Santos',
        password:
          '$2a$12$EYw8ffaOSy9hg.s0CiGkA.Iihdr5AfJcZuDE1VjG5F5wIsOBAAl7G',
        title: UserTitle.ADMIN,
      },
      role: admin,
    },
    {
      user: {
        email: 'jhon.doe@mock.com',
        firstName: 'Jhon',
        lastName: 'Doe',
        title: UserTitle.TEACHER,
        password:
          '$2a$10$nN9a7WQTtfNMQ/VfR9VnuO7Yk.MngtVJ7t9XSWLxqk0lvqFBe.4OS',
      },
      role: teacher,
    },
  ];

  for (const { user, role } of users) {
    await seed(user, role);
  }
}
