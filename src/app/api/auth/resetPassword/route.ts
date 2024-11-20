import { type NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    const user = prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
