import { type NextRequest, NextResponse } from 'next/server';

import { AuthService } from '../auth/service';
import { UserTrainingService } from './service';

const userTrainingService = new UserTrainingService();
const authService = new AuthService();

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  try {
    const { userId } = await authService.verifyToken(token);

    const userTrainings = await userTrainingService.findAllByUser(userId);

    return NextResponse.json(userTrainings);
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
  const body = await req.json();
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  try {
    const { userId } = await authService.verifyToken(token);

    const userTraining = await userTrainingService.create(userId, body);

    return NextResponse.json({ id: userTraining });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}
