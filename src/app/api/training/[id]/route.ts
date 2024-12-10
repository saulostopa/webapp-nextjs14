import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

import { AuthService } from '../../auth/service';
import { TrainingService } from '../service';

const authService = new AuthService();
const trainingService = new TrainingService();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params?.id;

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  try {
    await authService.verifyToken(token);

    const training = await trainingService.findOne(id);

    if (!training) {
      return NextResponse.json(
        { error: 'Training not found' },
        { status: 404 },
      );
    }

    return NextResponse.json(training, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params?.id;
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const updatedTraining = await req.json();

  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  try {
    await authService.verifyToken(token);

    await trainingService.update(id, updatedTraining);
    return NextResponse.json({}, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params?.id;

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  try {
    await authService.verifyToken(token);

    await prisma.training.delete({
      where: { id },
    });
    return NextResponse.json({}, { status: 204 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}
