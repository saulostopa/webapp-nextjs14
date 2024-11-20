import { PrismaClient, type Role } from '@prisma/client';

const prisma = new PrismaClient();

export async function seed(data: any, role: Role) {
  const found = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (found) {
    return;
  }

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
