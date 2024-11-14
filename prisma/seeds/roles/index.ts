import { Action, type Permission, RoleName } from '@prisma/client';

import prisma from '@/lib/prisma';

import { seed } from './role';

interface SendRole {
  name: RoleName;
  permissions: Permission[];
}

export async function seedRoles() {
  const foundPermissions = await prisma.permission.findMany();

  if (!foundPermissions.length) {
    throw new Error('No permissions found');
  }

  const roles: SendRole[] = [
    {
      name: RoleName.ADMIN,
      permissions: foundPermissions,
    },
    {
      name: RoleName.PRO,
      permissions: foundPermissions.filter(
        (permission) => permission.action !== Action.DELETE,
      ),
    },
    {
      name: RoleName.MEMBER,
      permissions: foundPermissions.filter(
        (permission) => permission.action === Action.READ,
      ),
    },
  ];

  for (const { name, permissions } of roles) {
    await seed(name, permissions);
  }
}
