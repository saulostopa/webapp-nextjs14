import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seed(data: any) {
  await prisma.training.create({
    data,
  });
}
