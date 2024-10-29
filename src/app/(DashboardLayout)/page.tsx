'use client';

import '@/app/global.css';

import { useTranslation } from 'react-i18next';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Footer from '@/app/(DashboardLayout)/components/landingpage/footer/Footer';
import LpHeader from '@/app/(DashboardLayout)/components/landingpage/header/Header';
import Benefits from '@/components/benefits';
import Hero from '@/components/landingpage/hero';
import SectionTitle from '@/components/sectionTitle';

export default function Landingpage() {
  const { t } = useTranslation();
  const tIndexPage: any = t('IndexPage', { returnObjects: true });

  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <span id={tIndexPage.id}>
        <Hero
          teaser={tIndexPage.teaser}
          teaserDescription={tIndexPage.teaserDescription}
        />
      </span>
      <SectionTitle
        pretitle="S2Pro"
        id={tIndexPage.about.id}
        title={tIndexPage.about.mission}
      >
        {tIndexPage.about.missionDescription}
      </SectionTitle>
      <Benefits id={tIndexPage.benefitOne.id} imgPos="right" option="two" />
      <Footer />
    </PageContainer>
  );
}

Landingpage.layout = 'Blank';
