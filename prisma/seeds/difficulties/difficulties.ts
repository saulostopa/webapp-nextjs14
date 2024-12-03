import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedDifficulties() {
  await prisma.difficulty.createMany({
    data: [
      {
        name: 'Very Ease',
      },
      {
        name: 'Easy',
      },
      {
        name: 'Medium',
      },
      {
        name: 'Hard',
      },
      {
        name: 'Very Hard',
      },
    ],
  });
}
