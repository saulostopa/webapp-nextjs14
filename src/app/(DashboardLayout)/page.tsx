'use client';

import '../../../public/css/tailwind.css';

import React from 'react';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import C2a2 from '@/app/(DashboardLayout)/components/landingpage/c2a/C2a2';
import DemosApps from '@/app/(DashboardLayout)/components/landingpage/demos-apps/DemosApps';
import Features from '@/app/(DashboardLayout)/components/landingpage/features/Features';
import Footer from '@/app/(DashboardLayout)/components/landingpage/footer/Footer';
import LpHeader from '@/app/(DashboardLayout)/components/landingpage/header/Header';
import Testimonial from '@/app/(DashboardLayout)/components/landingpage/testimonial/Testimonial';
import Benefits from '@/components/benefits';
import Hero from '@/components/landingpage/hero';
import SectionTitle from '@/components/sectionTitle';

export default function Landingpage() {
  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <Hero
        teaser="Treine certo, veja seu desempenho, construa uma vida longa com qualidade"
        teaserDescription="A S2Pro é um App gratuito para você treinar na academia, em casa, espaço crossfit, parques, ou onde quiser. Você pode criar seu próprio treino ou usar os que já temos disponíveis no app."
      />
      <SectionTitle pretitle="S2Pro" id="Home" title="Visão | Valores | Missão">
        A S2Pro é uma plataforma 100% personalisada para treinos online e
        presencial para praticantes e não praticantes de atividade física,
        personal trainer, estúdios, box crossfit e academias. Um App com todas
        as funcionalidades do seu dia a dia de treino pra fortalecer sua saúde
        de maneira prática e objetiva.
      </SectionTitle>
      <Benefits imgPos="right" option="two" />
      <DemosApps />
      <Features />
      <Testimonial />
      <C2a2 />
      <Footer />
    </PageContainer>
  );
}

Landingpage.layout = 'Blank';
