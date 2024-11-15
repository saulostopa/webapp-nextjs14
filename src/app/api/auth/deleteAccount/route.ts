import { type NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

import { verifyToken } from '../utils/auth';

export async function DELETE(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Token not provided' }, { status: 401 });
  }

  try {
    const decodedToken = verifyToken(token);

    if (
      !decodedToken ||
      typeof decodedToken !== 'object' ||
      !('userId' in decodedToken)
    ) {
      throw new Error('Invalid token');
    }

    const { userId } = decodedToken;

    await prisma.account.deleteMany({
      where: {
        userId,
      },
    });

    return NextResponse.json({ message: 'Account successfully deleted' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting account' },
      { status: 500 },
    );
  }
}
