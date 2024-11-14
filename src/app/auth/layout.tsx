'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { type ReactElement, type ReactNode, useEffect } from 'react';

import AccessPage from '@/components/accessPage';
import { AuthProvider } from '@/contexts/auth';

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') router.push('/user/profile');
  }, [status, router]);

  return (
    <AuthProvider session={session!}>
      <AccessPage>{children as ReactElement}</AccessPage>
    </AuthProvider>
  );
}
