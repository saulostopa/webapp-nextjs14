'use client';

import Grid from '@mui/material/Grid';

import ProductDetail from '@/app/(DashboardLayout)/components/apps/ecommerce/productDetail';
import ProductCarousel from '@/app/(DashboardLayout)/components/apps/ecommerce/productDetail/ProductCarousel';
import ProductDesc from '@/app/(DashboardLayout)/components/apps/ecommerce/productDetail/ProductDesc';
import ProductRelated from '@/app/(DashboardLayout)/components/apps/ecommerce/productDetail/ProductRelated';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ChildCard from '@/app/(DashboardLayout)/components/shared/ChildCard';

const EcommerceDetail = () => {
  return (
    <PageContainer
      title="eCommerce Detail"
      description="this is eCommerce Detail"
    >
      <Grid
        container
        spacing={3}
        sx={{ maxWidth: { lg: '1055px', xl: '1200px' } }}
      >
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>
            {/* ------------------------------------------- */}
            {/* Carousel */}
            {/* ------------------------------------------- */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={6}>
                <ProductCarousel />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <ProductDetail />
              </Grid>
            </Grid>
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductDesc />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductRelated />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetail;
