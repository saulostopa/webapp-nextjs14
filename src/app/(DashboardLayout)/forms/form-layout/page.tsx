'use client';

import Grid from '@mui/material/Grid';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import {
  FbBasicHeaderForm,
  FbDefaultForm,
  FbDisabledForm,
  FbInputVariants,
  FbLeftIconForm,
  FbOrdinaryForm,
  FbReadonlyForm,
  FbRightIconForm,
} from '@/app/(DashboardLayout)/components/forms/form-layouts/index';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Form Layouts',
  },
];

const FormLayouts = () => (
  <PageContainer title="Form Layout" description="this is Form Layout">
    {/* breadcrumb */}
    <Breadcrumb title="Form Layouts" items={BCrumb} />
    {/* end breadcrumb */}

    <Grid container spacing={3}>
      <Grid item lg={12} md={12} xs={12}>
        <FbOrdinaryForm />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbInputVariants />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbDefaultForm />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbBasicHeaderForm />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbReadonlyForm />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbDisabledForm />
      </Grid>
      <Grid item lg={6} md={12} xs={12}>
        <FbLeftIconForm />
      </Grid>
      <Grid item lg={6} md={12} xs={12}>
        <FbRightIconForm />
      </Grid>
    </Grid>
  </PageContainer>
);

export default FormLayouts;
