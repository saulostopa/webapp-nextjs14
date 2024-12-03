import { type NextRequest, NextResponse } from 'next/server';

import { AuthService } from '../../auth/service';
import { UserTrainingService } from '../service';

const userTrainingService = new UserTrainingService();
const authService = new AuthService();

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

    const userTraining = await userTrainingService.findOne(id);

    return NextResponse.json(userTraining);
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}

export async function PATCH(
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

    await userTrainingService.markFinishTraining(id);

    return NextResponse.json(
      { message: 'Training marked as finished' },
      { status: 200 },
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}
