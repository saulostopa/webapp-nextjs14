'use client';

import Grid from '@mui/material/Grid';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ChildCard from '@/app/(DashboardLayout)/components/shared/ChildCard';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import AlertDialog from '@/app/(DashboardLayout)/components/ui-components/dialog/AlertDialog';
import FormDialog from '@/app/(DashboardLayout)/components/ui-components/dialog/FormDialog';
import FullscreenDialog from '@/app/(DashboardLayout)/components/ui-components/dialog/FullscreenDialog';
import MaxWidthDialog from '@/app/(DashboardLayout)/components/ui-components/dialog/MaxWidthDialog';
import ResponsiveDialog from '@/app/(DashboardLayout)/components/ui-components/dialog/ResponsiveDialog';
import ScrollContentDialog from '@/app/(DashboardLayout)/components/ui-components/dialog/ScrollContentDialog';
import SimpleDialog from '@/app/(DashboardLayout)/components/ui-components/dialog/SimpleDialog';
import TransitionDialog from '@/app/(DashboardLayout)/components/ui-components/dialog/TransitionDialog';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Dialog',
  },
];

const MuiDialog = () => (
  <PageContainer title="Dialog" description="this is Dialog">
    {/* breadcrumb */}
    <Breadcrumb title="Dialog" items={BCrumb} />
    {/* end breadcrumb */}

    <ParentCard title="Dialog">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Simple">
            <SimpleDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Alert">
            <AlertDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Transition">
            <TransitionDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Form">
            <FormDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Full screen">
            <FullscreenDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Max width">
            <MaxWidthDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Scrolling Content">
            <ScrollContentDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Responsive Fullscreen">
            <ResponsiveDialog />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiDialog;
