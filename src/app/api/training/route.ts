import { type NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

import { AuthService } from '../auth/service';

const authService = new AuthService();

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];
  try {
    await authService.verifyToken(token);

    const trainings = await prisma.training.findMany({
      include: {
        difficulty: true,
        category: true,
        user: true,
        exercises: {
          include: {
            series: true,
          },
        },
      },
    });
    return NextResponse.json(trainings, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const trainingData = await req.json();
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  try {
    await authService.verifyToken(token);

    const newTraining = await prisma.training.create({
      data: trainingData,
    });
    return NextResponse.json({ id: newTraining.id }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}
