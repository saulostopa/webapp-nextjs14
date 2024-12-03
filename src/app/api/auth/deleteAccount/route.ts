import { type NextRequest, NextResponse } from 'next/server';

import { UserService } from '../../user/service';
import { AuthService } from '../service';

const userService = new UserService();
const authService = new AuthService();

export async function DELETE(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  try {
    const decodedToken = await authService.verifyToken(token);

    const { userId } = decodedToken;

    await userService.deleteUser(userId);

    return NextResponse.json({ message: 'Account successfully deleted' });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err?.cause?.message || 'Something went wrong, try again later.',
      },
      { status: err?.cause?.status || 500 },
    );
  }
}
