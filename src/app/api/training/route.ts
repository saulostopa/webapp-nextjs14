import { type NextRequest, NextResponse } from 'next/server';

import { AuthService } from '../auth/service';
import { TrainingService } from './service';

const authService = new AuthService();
const trainingService = new TrainingService();

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];
  try {
    await authService.verifyToken(token);

    const trainings = await trainingService.find();
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

    const newTraining = await trainingService.create(trainingData);
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
