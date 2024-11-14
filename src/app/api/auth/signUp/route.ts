import bcrypt from 'bcryptjs';
import { type NextRequest, NextResponse } from 'next/server';

import { env } from '@/configs';
import { prisma } from '@/lib/prisma';

import type { ISignUp } from './interface';

const { salts } = env;
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { email, password, firstName, lastName, image }: ISignUp = data;

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 },
      );
    }

    const passwordHash = await bcrypt.hash(password, salts);

    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        avatar: image,
        password: passwordHash,
      },
    });

    const { ...userWithoutAuth } = user;
    return NextResponse.json(userWithoutAuth, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
