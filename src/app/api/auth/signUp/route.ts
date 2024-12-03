import bcrypt from 'bcryptjs';
import { type NextRequest, NextResponse } from 'next/server';

import { env } from '@/configs';

import { UserService } from '../../user/service';
import type { ISignUp } from './interface';

const { salts } = env;

const userService = new UserService();

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

    const user = await userService.createUser(
      email,
      firstName,
      lastName,
      passwordHash,
      image,
    );

    return NextResponse.json({ ...user, password: undefined }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}
