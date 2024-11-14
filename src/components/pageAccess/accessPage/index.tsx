import { useSession } from 'next-auth/react';
import type { ReactElement } from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import LoadingComponent from '@/components/loadingComponent';

export default function AccessPage({ children }: { children: ReactElement }) {
  const { status } = useSession();

  return (
    <>
      {status === 'loading' && <LoadingComponent />}

      <PageContainer>{children}</PageContainer>
    </>
  );
}
