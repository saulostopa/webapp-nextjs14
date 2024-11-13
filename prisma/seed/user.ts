import { PrismaClient } from '@prisma/client';

import { dataUser } from '../data/user'; // generated from https://csvjson.com/csv2json

const prisma = new PrismaClient();

async function main() {
  const allDataUser = dataUser.map((d: any) => {
    return prisma.user.create({ data: d });
  });
  await Promise.all(allDataUser);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
