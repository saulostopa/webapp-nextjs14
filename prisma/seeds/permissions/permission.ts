import { Action, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedPermissions() {
  await prisma.permission.createMany({
    data: [
      {
        action: Action.CREATE,
        resource: 'USER',
      },
      {
        action: Action.READ,
        resource: 'USER',
      },
      {
        action: Action.UPDATE,
        resource: 'USER',
      },
      {
        action: Action.DELETE,
        resource: 'USER',
      },
    ],
  });
}

// TODO: improve this permissions to ACL control
