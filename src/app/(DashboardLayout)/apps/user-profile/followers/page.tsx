'use client';

import Grid from '@mui/material/Grid';

import FollowerCard from '@/app/(DashboardLayout)/components/apps/userprofile/followers/FollowerCard';
import ProfileBanner from '@/app/(DashboardLayout)/components/apps/userprofile/profile/ProfileBanner';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

const Followers = () => {
  return (
    <PageContainer title="Followers" description="this is Followers">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item sm={12}>
          <FollowerCard />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Followers;
