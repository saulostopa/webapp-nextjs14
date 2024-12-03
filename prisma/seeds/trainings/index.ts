import { PrismaClient, RoleName } from '@prisma/client';
import { seed } from './trainings';

const prisma = new PrismaClient();

export async function seedTrainings() {
  const teacher = await prisma.role.findUnique({
    where: { name: RoleName.TEACHER },
  });

  if (!teacher) {
    throw new Error('Roles not found');
  }

  const user = await prisma.user.findFirst({
    where: {
      roles: {
        some: {
          roleId: teacher.id,
        },
      },
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const category = await prisma.category.findFirst();

  if (!category) {
    throw new Error('Category not found');
  }

  const difficulty = await prisma.difficulty.findFirst();

  if (!difficulty) {
    throw new Error('Difficulty not found');
  }

  const trainings = [
    {
      categoryId: category.id,
      difficultyId: difficulty.id,
      date: new Date(),
      description: 'Training 1',
      name: 'A New Training',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: user.id,
      time: 30,
    },
  ];

  for (const training of trainings) {
    await seed(training);
  }
}
