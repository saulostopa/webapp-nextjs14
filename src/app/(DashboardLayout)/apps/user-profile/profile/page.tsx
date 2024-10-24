'use client';

import Grid from '@mui/material/Grid';

import IntroCard from '@/app/(DashboardLayout)/components/apps/userprofile/profile/IntroCard';
import PhotosCard from '@/app/(DashboardLayout)/components/apps/userprofile/profile/PhotosCard';
import Post from '@/app/(DashboardLayout)/components/apps/userprofile/profile/Post';
import ProfileBanner from '@/app/(DashboardLayout)/components/apps/userprofile/profile/ProfileBanner';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

const UserProfile = () => {
  return (
    <PageContainer title="Profile" description="this is Profile">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>

        {/* intro and Photos Card */}
        <Grid item sm={12} lg={4} xs={12}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <IntroCard />
            </Grid>
            <Grid item sm={12}>
              <PhotosCard />
            </Grid>
          </Grid>
        </Grid>
        {/* Posts Card */}
        <Grid item sm={12} lg={8} xs={12}>
          <Post />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default UserProfile;
