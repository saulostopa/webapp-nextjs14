import type { Prisma, Training } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';

import { prisma } from '@/lib/prisma';

export class UserTrainingService {
  repository: Prisma.UserTrainingDelegate<DefaultArgs>;

  constructor() {
    this.repository = prisma.userTraining;
  }

  async findAllByUser(userId: string) {
    const userTrainings = await this.repository.findMany({
      where: {
        userId,
        AND: {
          training: {
            hide: false,
          },
        },
      },
      include: {
        training: {
          include: {
            exercises: {
              include: {
                series: true,
              },
            },
            category: true,
            difficulty: true,
          },
        },
      },
    });

    return userTrainings;
  }

  async findOne(id: string) {
    const userTraining = await this.repository.findFirst({
      where: {
        id,
      },
      include: {
        training: {
          include: {
            exercises: {
              include: {
                series: true,
              },
            },
            category: true,
            difficulty: true,
          },
        },
      },
    });

    return userTraining;
  }

  async create(userId: string, training: Training) {
    const { id } = await this.repository.create({
      data: {
        userId,
        trainingId: training.id,
      },
    });
    return id;
  }

  async markFinishTraining(id: string) {
    await this.repository.update({
      where: {
        id,
      },
      data: {
        finished: true,
        finishedAt: new Date(),
      },
    });
  }
}
