'use client';

import React from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Banner from '@/app/(DashboardLayout)/components/landingpage/banner/Banner';
import C2a2 from '@/app/(DashboardLayout)/components/landingpage/c2a/C2a2';
import DemosApps from '@/app/(DashboardLayout)/components/landingpage/demos-apps/DemosApps';
import Features from '@/app/(DashboardLayout)/components/landingpage/features/Features';
import Footer from '@/app/(DashboardLayout)/components/landingpage/footer/Footer';
// components
import LpHeader from '@/app/(DashboardLayout)/components/landingpage/header/Header';
import Testimonial from '@/app/(DashboardLayout)/components/landingpage/testimonial/Testimonial';

export default function Landingpage() {
  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <Banner />
      <DemosApps />
      <Features />
      <Testimonial />
      <C2a2 />
      <Footer />
    </PageContainer>
  );
}

Landingpage.layout = 'Blank';
