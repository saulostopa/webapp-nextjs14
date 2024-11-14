import { PrismaClient } from '@prisma/client';

import { seedPermissions } from './seeds/permissions/permission';
import { seedRoles } from './seeds/roles';
import { seedUsers } from './seeds/users';

const prisma = new PrismaClient();

async function main() {
  await seedPermissions();
  await seedRoles();
  await seedUsers();
}

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
