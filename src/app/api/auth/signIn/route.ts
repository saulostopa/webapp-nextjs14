import { type NextRequest, NextResponse } from 'next/server';

import { login } from '../old-service';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const { token, user } = await login(email, password);
    return NextResponse.json({ token, user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 401 });
  }
}
