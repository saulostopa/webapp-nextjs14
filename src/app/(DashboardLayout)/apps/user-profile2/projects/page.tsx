'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ProfileBanner from '@/app/(DashboardLayout)/components/apps/userprofile2/profile/ProfileBanner';
import FriendsCard from '@/app/(DashboardLayout)/components/apps/userprofile2/projects/FriendsCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

const Friends = () => {
  return (
    <PageContainer title="Friends" description="this is Friends">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item sm={12}>
          <Box mx={3}>
            <FriendsCard />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Friends;
