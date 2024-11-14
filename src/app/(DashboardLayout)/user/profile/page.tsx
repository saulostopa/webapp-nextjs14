'use client';

import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';

import { useAuthContext } from '@/contexts/auth';

export default function Profile() {
  const { user } = useAuthContext();

  if (!user) return null;

  return (
    <div className="flex justify-between">
      <p>USER PROFILE</p>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
