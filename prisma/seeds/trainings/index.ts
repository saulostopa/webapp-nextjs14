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

  const trainings = [
    {
      date: new Date(),
      description: 'Training 1',
      name: { 'pt-BR': 'Um novo treino', 'en-US': 'A new training' },
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
