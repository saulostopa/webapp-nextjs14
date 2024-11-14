import { type NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

import { verifyToken } from '../utils/auth';

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Token não fornecido' }, { status: 401 });
  }

  try {
    const decodedToken = verifyToken(token);

    if (
      !decodedToken ||
      typeof decodedToken !== 'object' ||
      !('userId' in decodedToken)
    ) {
      throw new Error('Token inválido');
    }

    const { userId } = decodedToken;

    await prisma.session.delete({
      where: {
        userId_token: {
          userId,
          token,
        },
      },
    });

    return NextResponse.json('Success', { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 401 });
  }
}
