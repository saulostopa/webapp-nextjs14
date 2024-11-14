'use client';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { useAuthContext } from '@/contexts/auth';

export default function Profile() {
  const { user } = useAuthContext();

  if (!user) return null;

  return (
    <PageContainer>
      <p>USER PROFILE</p>
    </PageContainer>
  );
}
