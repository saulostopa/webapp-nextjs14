'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { type ReactElement, type ReactNode, useEffect, useState } from 'react';

import AccessPage from '@/components/accessPage';
import LoadingComponent from '@/components/loadingComponent';
import { AuthProvider } from '@/contexts/auth';

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/');
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  useEffect(() => {
    if (status === 'authenticated') router.push('/user/profile');
  }, [status, router]);

  return (
    <div>
      {loading ? (
        <AuthProvider session={session!}>
          <AccessPage>{children as ReactElement}</AccessPage>
        </AuthProvider>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}
