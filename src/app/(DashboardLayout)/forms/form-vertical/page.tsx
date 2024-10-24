'use client';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import BasicIcons from '@/app/(DashboardLayout)/components/forms/form-vertical/BasicIcons';
import BasicLayout from '@/app/(DashboardLayout)/components/forms/form-vertical/BasicLayout';
import CollapsibleForm from '@/app/(DashboardLayout)/components/forms/form-vertical/CollapsibleForm';
import FormSeparator from '@/app/(DashboardLayout)/components/forms/form-vertical/FormSeparator';
import FormTabs from '@/app/(DashboardLayout)/components/forms/form-vertical/FormTabs';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
// components
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Vertical Form',
  },
];

const FormVertical = () => {
  return (
    <PageContainer title="Form Vertical" description="this is Form Vertical">
      {/* breadcrumb */}
      <Breadcrumb title="Vertical Form" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <ParentCard title="Basic Layout">
            <BasicLayout />
          </ParentCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ParentCard title="Basic with Icons">
            <BasicIcons />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <ParentCard title="Multi Column with Form Separator">
            <FormSeparator />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" mb={3}>
            Collapsible Section
          </Typography>
          <CollapsibleForm />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" mb={3}>
            Form with Tabs
          </Typography>
          <FormTabs />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FormVertical;
