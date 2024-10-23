'use client';

import Grid from '@mui/material/Grid';
import React from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ColorButtonGroup from '@/app/(DashboardLayout)/components/forms/form-elements/button/ColorButtonGroup';
import ColorButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/ColorButtons';
import DefaultButtonGroup from '@/app/(DashboardLayout)/components/forms/form-elements/button/DefaultButtonGroup';
import DefaultButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/DefaultButtons';
import FabColorButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/FabColorButtons';
import FabDefaultButton from '@/app/(DashboardLayout)/components/forms/form-elements/button/FabDefaultButton';
import FabSizeButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/FabSizeButtons';
import IconColorButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/IconColorButtons';
import IconLoadingButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/IconLoadingButtons';
import IconSizeButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/IconSizeButtons';
import OutlinedColorButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/OutlinedColorButtons';
import OutlinedIconButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/OutlinedIconButtons';
import OutlinedSizeButton from '@/app/(DashboardLayout)/components/forms/form-elements/button/OutlinedSizeButton';
import SizeButton from '@/app/(DashboardLayout)/components/forms/form-elements/button/SizeButton';
import SizeButtonGroup from '@/app/(DashboardLayout)/components/forms/form-elements/button/SizeButtonGroup';
import TextButtonGroup from '@/app/(DashboardLayout)/components/forms/form-elements/button/TextButtonGroup';
import TextColorButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/TextColorButtons';
import TextDefaultButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/TextDefaultButtons';
import TextIconButtons from '@/app/(DashboardLayout)/components/forms/form-elements/button/TextIconButtons';
import TextSizeButton from '@/app/(DashboardLayout)/components/forms/form-elements/button/TextSizeButton';
import VerticalButtonGroup from '@/app/(DashboardLayout)/components/forms/form-elements/button/VerticalButtonGroup';
import ChildCard from '@/app/(DashboardLayout)/components/shared/ChildCard';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Button',
  },
];

const MuiButton = () => (
  <PageContainer title="Button" description="this is Button">
    {/* breadcrumb */}
    <Breadcrumb title="Button" items={BCrumb} />
    {/* end breadcrumb */}
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ParentCard title="Buttons">
          <Grid container spacing={3}>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Default">
                <DefaultButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Colors">
                <ColorButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Loading Buttons">
                <IconLoadingButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Sizes">
                <SizeButton />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Outlined">
                <OutlinedColorButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Outlined Icon">
                <OutlinedIconButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Outline Size">
                <OutlinedSizeButton />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Text">
                <TextDefaultButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Text Color">
                <TextColorButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Text Icon">
                <TextIconButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Text Sizes">
                <TextSizeButton />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Icon Color">
                <IconColorButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Icon Sizes">
                <IconSizeButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="FAB">
                <FabDefaultButton />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="FAB Color">
                <FabColorButtons />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="FAB Size">
                <FabSizeButtons />
              </ChildCard>
            </Grid>
          </Grid>
        </ParentCard>
      </Grid>
      <Grid item xs={12}>
        <ParentCard title="Button Group">
          <Grid container spacing={3}>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Default">
                <DefaultButtonGroup />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Sizes">
                <SizeButtonGroup />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Verical">
                <VerticalButtonGroup />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
              <ChildCard title="Text">
                <TextButtonGroup />
              </ChildCard>
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} display="flex" alignItems="stretch">
              <ChildCard title="Color">
                <ColorButtonGroup />
              </ChildCard>
            </Grid>
          </Grid>
        </ParentCard>
      </Grid>
    </Grid>
  </PageContainer>
);
export default MuiButton;
