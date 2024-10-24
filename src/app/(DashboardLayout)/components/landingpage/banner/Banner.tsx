import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';

import BannerContent from './BannerContent';
import BannerSlider from './BannerSlider';

const Banner = () => {
  return (
    <Box my={10} sx={{ overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={11} sm={10}>
            <BannerContent />
          </Grid>
        </Grid>
      </Container>
      <BannerSlider />
    </Box>
  );
};

export default Banner;
