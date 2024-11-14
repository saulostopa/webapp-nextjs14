import { type Permission, PrismaClient, type RoleName } from '@prisma/client';

const prisma = new PrismaClient();

export async function seed(name: RoleName, permissions: Permission[]) {
  await prisma.role.create({
    data: {
      name,
      permissions: {
        connect: permissions.map((permission) => ({ id: permission.id })),
      },
    },
  });
}
