'use client';

import { useAuthContext } from '@/contexts/auth';

export default function Profile() {
  const { user } = useAuthContext();

  if (!user) return null;

  return <p>USER PROFILE</p>;
}
