'use client';

import Grid from '@mui/material/Grid';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ColorsSwitch from '@/app/(DashboardLayout)/components/forms/form-elements/switch/Colors';
import CustomExSwitch from '@/app/(DashboardLayout)/components/forms/form-elements/switch/Custom';
import DefaultSwitch from '@/app/(DashboardLayout)/components/forms/form-elements/switch/Default';
import DefaultLabelSwitch from '@/app/(DashboardLayout)/components/forms/form-elements/switch/DefaultLabel';
import PositionSwitch from '@/app/(DashboardLayout)/components/forms/form-elements/switch/Position';
import SizesSwitch from '@/app/(DashboardLayout)/components/forms/form-elements/switch/Sizes';
import ChildCard from '@/app/(DashboardLayout)/components/shared/ChildCard';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Switch',
  },
];

const MuiSwitch = () => (
  <PageContainer title="Switch" description="this is Switch">
    {/* breadcrumb */}
    <Breadcrumb title="Switch" items={BCrumb} />
    {/* end breadcrumb */}
    <ParentCard title="Switch">
      <Grid container spacing={3}>
        {/* ------------------------------------------------------------------- */}
        {/* Custom */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Custom">
            <CustomExSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Default */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Default">
            <DefaultSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Default with label */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Default with Label">
            <DefaultLabelSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Sizes */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Sizes">
            <SizesSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Default Colors */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Default Colors">
            <ColorsSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Placement */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Placement">
            <PositionSwitch />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiSwitch;
