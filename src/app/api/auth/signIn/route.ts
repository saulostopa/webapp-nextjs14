import { type NextRequest, NextResponse } from 'next/server';

import { AuthService } from '../service';

const authService = new AuthService();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const { user, token } = await authService.login(email, password);
    return NextResponse.json({ token, user }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}
