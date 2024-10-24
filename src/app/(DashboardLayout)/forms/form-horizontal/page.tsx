'use client';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import BasicIcons from '@/app/(DashboardLayout)/components/forms/form-horizontal/BasicIcons';
import BasicLayout from '@/app/(DashboardLayout)/components/forms/form-horizontal/BasicLayout';
import CollapsibleForm from '@/app/(DashboardLayout)/components/forms/form-horizontal/CollapsibleForm';
import FormLabelAlignment from '@/app/(DashboardLayout)/components/forms/form-horizontal/FormLabelAlignment';
import FormSeparator from '@/app/(DashboardLayout)/components/forms/form-horizontal/FormSeparator';
import FormTabs from '@/app/(DashboardLayout)/components/forms/form-horizontal/FormTabs';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
// components
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Horizontal Form',
  },
];

const FormHorizontal = () => {
  return (
    <PageContainer
      title="Horizontal Form"
      description="this is Horizontal Form"
    >
      {/* breadcrumb */}
      <Breadcrumb title="Horizontal Form" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParentCard title="Basic Layout">
            <BasicLayout />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <ParentCard title="Basic with Icons">
            <BasicIcons />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <ParentCard title="Form Separator">
            <FormSeparator />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <ParentCard title="Form Label Alignment">
            <FormLabelAlignment />
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

export default FormHorizontal;
