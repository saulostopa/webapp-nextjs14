import type { Prisma } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';

import { prisma } from '@/lib/prisma';

export class TrainingService {
  repository: Prisma.TrainingDelegate<DefaultArgs>;

  constructor() {
    this.repository = prisma.training;
  }

  async create(data: Prisma.TrainingCreateInput) {
    return this.repository.create({ data });
  }

  async find() {
    return this.repository.findMany({
      include: {
        difficulty: true,
        category: true,
        teacher: true,
        exercises: {
          include: {
            series: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return this.repository.findUnique({
      where: { id },
      include: {
        difficulty: true,
        category: true,
        teacher: true,
        exercises: {
          include: {
            series: true,
          },
        },
      },
    });
  }

  async update(id: string, data: Prisma.TrainingUpdateInput) {
    return this.repository.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.repository.delete({ where: { id } });
  }
}
