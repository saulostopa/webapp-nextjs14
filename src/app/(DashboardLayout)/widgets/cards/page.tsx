'use client';

import Grid from '@mui/material/Grid';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ProfileCard from '@/app/(DashboardLayout)/components/dashboards/dashboard2/ProfileCard';
import ComplexCard from '@/app/(DashboardLayout)/components/widgets/cards/ComplexCard';
import EcommerceCard from '@/app/(DashboardLayout)/components/widgets/cards/EcommerceCard';
import FollowerCard from '@/app/(DashboardLayout)/components/widgets/cards/FollowerCard';
import FriendCard from '@/app/(DashboardLayout)/components/widgets/cards/FriendCard';
import GiftCard from '@/app/(DashboardLayout)/components/widgets/cards/GiftCard';
import MusicCard from '@/app/(DashboardLayout)/components/widgets/cards/MusicCard';
import Settings from '@/app/(DashboardLayout)/components/widgets/cards/Settings';
import UpcomingAcitivity from '@/app/(DashboardLayout)/components/widgets/cards/UpcomingActivity';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

import BlogCard from '../../components/dashboards/dashboard2/BlogCard';
import NewGoals from '../../components/dashboards/dashboard2/NewGoals';
import TopCards from '../../components/dashboards/dashboard2/TopCards';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Cards',
  },
];

const WidgetCards = () => {
  return (
    <PageContainer title="Cards" description="this is Cards">
      {/* breadcrumb */}
      <Breadcrumb title="Cards" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCards />
        </Grid>
        <Grid item xs={12}>
          <ComplexCard />
        </Grid>
        <Grid item xs={12}>
          <EcommerceCard />
        </Grid>
        <Grid item xs={12}>
          <MusicCard />
        </Grid>
        <Grid item xs={12}>
          <FollowerCard />
        </Grid>
        <Grid item xs={12}>
          <FriendCard />
        </Grid>
        <Grid item xs={12}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Settings />
        </Grid>
        <Grid item xs={12} lg={8}>
          <GiftCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={5}>
          <UpcomingAcitivity />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <BlogCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <NewGoals />
            </Grid>
            <Grid item xs={12}>
              <ProfileCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default WidgetCards;
