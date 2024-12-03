import { type NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

import { AuthService } from '../service';

const authService = new AuthService();

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  try {
    const { userId } = await authService.verifyToken(token);

    await prisma.session.delete({
      where: {
        userId_token: {
          userId,
          token: token!,
        },
      },
    });

    return NextResponse.json('Success', { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}
