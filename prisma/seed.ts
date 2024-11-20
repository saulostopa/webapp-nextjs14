import { PrismaClient } from '@prisma/client';

import { seedPermissions } from './seeds/permissions/permission';
import { seedRoles } from './seeds/roles';
import { seedUsers } from './seeds/users';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  await seedPermissions();
  await seedRoles();
  await seedUsers();
}

main()
  .then(() => {
    console.log('Seeding complete.');
  })
  .catch((err) => {
    console.error('Seeding failed.', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
