'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import Table1 from '@/app/(DashboardLayout)/components/tables/Table1';
import Table2 from '@/app/(DashboardLayout)/components/tables/Table2';
import Table3 from '@/app/(DashboardLayout)/components/tables/Table3';
import Table4 from '@/app/(DashboardLayout)/components/tables/Table4';
import Table5 from '@/app/(DashboardLayout)/components/tables/Table5';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Basic Table',
  },
];

const BasicTable = () => (
  <PageContainer title="Basic Table" description="this is Basic Table">
    {/* breadcrumb */}
    <Breadcrumb title="Basic Table" items={BCrumb} />
    {/* end breadcrumb */}
    <ParentCard title="Basic Table">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <Table5 />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Table2 />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Table3 />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Table1 />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Table4 />
          </Box>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);

export default BasicTable;
