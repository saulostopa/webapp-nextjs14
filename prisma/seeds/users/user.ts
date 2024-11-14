import { PrismaClient, type Role } from '@prisma/client';

const prisma = new PrismaClient();

export async function seed(data: any, passwordHash: string, role: Role) {
  await prisma.user.create({
    data: {
      ...data,
      auth: {
        create: {
          password: passwordHash,
        },
      },
      roles: {
        create: {
          roleId: role.id,
        },
      },
    },
  });
}
