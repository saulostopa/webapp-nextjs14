import { PrismaClient, type Role } from '@prisma/client';

const prisma = new PrismaClient();

export async function seed(data: any, role: Role) {
  await prisma.user.create({
    data: {
      ...data,
      roles: {
        create: {
          roleId: role.id,
        },
      },
    },
  });
}
