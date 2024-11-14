import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { verifyToken } from '@/app/api/auth';

export const config = {
  matcher: ['/auth/maintenance'],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  for (const route of config.matcher) {
    if (!pathname.startsWith(route)) {
      return NextResponse.next();
    }
  }

  const token = req.cookies.get('token')?.value;

  if (!token || !verifyToken(token)) {
    const loginUrl = new URL('/auth/login', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
