import { type Permission, PrismaClient, type RoleName } from '@prisma/client';

const prisma = new PrismaClient();

export async function seed(name: RoleName, permissions: Permission[]) {
  const found = await prisma.role.findFirst({
    where: {
      name,
    },
  });

  if (found) {
    return;
  }

  await prisma.role.create({
    data: {
      name,
      permissions: {
        connect: permissions.map((permission) => ({ id: permission.id })),
      },
    },
  });
}
