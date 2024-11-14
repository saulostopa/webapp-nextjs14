import { useSession } from 'next-auth/react';
import type { ReactElement } from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import LoadingComponent from '@/components/loadingComponent';

export default function AccessPage({ children }: { children: ReactElement }) {
  const { status } = useSession();

  if (status === 'loading') return <LoadingComponent />;

  return <PageContainer>{children}</PageContainer>;
}
