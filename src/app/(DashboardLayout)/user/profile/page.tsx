'use client';

// import { useSession } from 'next-auth/react';
// import { useEffect } from 'react';

import { useAuthContext } from '@/contexts/auth';

export default function Profile() {
  const { user } = useAuthContext();
  // const { status } = useSession();

  // useEffect(() => {
  //   console.log(status);
  // }, []);

  if (!user) return null;

  return <p>USER PROFILE</p>;
}
