'use client';

import '@/app/global.css';

import { useTranslation } from 'react-i18next';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Footer from '@/app/(DashboardLayout)/components/landingpage/footer/Footer';
import LpHeader from '@/app/(DashboardLayout)/components/landingpage/header/Header';
import PopUpWidget from '@/app/(DashboardLayout)/components/landingpage/help-email/PopUpWidget';
import Benefits from '@/components/benefits';
import Hero from '@/components/landingpage/hero';
import SectionTitle from '@/components/sectionTitle';

export default function Landingpage() {
  const { t } = useTranslation();
  const tIndexPage: any = t('IndexPage', { returnObjects: true });
  const tPopUpWidget: any = tIndexPage.popupWidget;

  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <span id={tIndexPage.id}>
        <Hero
          teaser={tIndexPage.teaser}
          teaserDescription={tIndexPage.teaserDescription}
        />
      </span>
      <span id={tIndexPage.about.id}>
        <SectionTitle pretitle="S2Pro" title={tIndexPage.about.mission}>
          {tIndexPage.about.missionDescription}
        </SectionTitle>
      </span>
      <span id={tIndexPage.benefitOne.id}>
        <Benefits imgPos="right" option="two" />
      </span>
      <Footer />
      <PopUpWidget items={tPopUpWidget} />
    </PageContainer>
  );
}

Landingpage.layout = 'Blank';
