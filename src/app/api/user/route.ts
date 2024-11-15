import { type NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

import { verifyToken } from '../auth/utils/auth';

const userSelectFields = {
  id: true,
  firstName: true,
  lastName: true,
  email: true,
  avatar: true,
  createdAt: true,
  updatedAt: true,
  title: true,
  roles: { select: { role: true } },
  accounts: true,
};

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: userSelectFields,
    });
    return NextResponse.json(users, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: `Failed to fetch users: ${err.message}` },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json(
      { error: 'Authorization token not provided' },
      { status: 401 },
    );
  }

  try {
    const decodedToken = verifyToken(token);
    if (
      !decodedToken ||
      typeof decodedToken !== 'object' ||
      !decodedToken.userId
    ) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }

    const { userId } = decodedToken;
    const data = await req.json();

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      select: userSelectFields,
      data,
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: `Failed to update user: ${err.message}` },
      { status: 500 },
    );
  }
}
