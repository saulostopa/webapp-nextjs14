import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { AuthService } from '../service';

const authService = new AuthService();

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    const { expiredAt } = await authService.generateResetToken(email);

    return NextResponse.json(
      {
        message: 'Token generated successfully',
        expiresAt: expiredAt,
      },
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

export async function PATCH(req: NextRequest) {
  const { token, password } = await req.json();

  if (!token || !password) {
    return NextResponse.json(
      { error: 'Token and new password are required' },
      { status: 400 },
    );
  }
  try {
    await AuthService.resetPassword(token, password);

    return NextResponse.json(
      { message: 'Password reset successfully' },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
