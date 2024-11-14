'use client';

import '@/app/global.css';

import { useTranslation } from 'react-i18next';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Benefits from '@/components/landingPage/benefits';
import C2a from '@/components/landingPage/c2a';
import Faq from '@/components/landingPage/faq';
import Footer from '@/components/landingPage/footer/Footer';
import LpHeader from '@/components/landingPage/header/Header';
import PopUpWidget from '@/components/landingPage/help-email/PopUpWidget';
import Hero from '@/components/landingPage/hero';
import SectionTitle from '@/components/landingPage/sectionTitle';

export default function Landingpage() {
  const { t } = useTranslation();
  const tIndexPage: any = t('IndexPage', { returnObjects: true });
  const tPopUpWidget: any = tIndexPage.popupWidget;
  const tLastWorkouts: any = t('LastWorkouts', { returnObjects: true });
  const tLocaleLayout: any = t('LocaleLayout', { returnObjects: true });

  return (
    <PageContainer
      title={tLocaleLayout.title}
      description="this is Landingpage"
    >
      <LpHeader />
      <span id={tIndexPage.id}>
        <Hero
          teaser={tIndexPage.teaser}
          teaserDescription={tIndexPage.teaserDescription}
        />
      </span>
      <SectionTitle
        id={tIndexPage.about.id}
        pretitle="S2Pro"
        title={tIndexPage.about.mission}
      >
        {tIndexPage.about.missionDescription}
      </SectionTitle>
      <Benefits option="one" />
      <Benefits imgPos="right" option="two" />
      <SectionTitle
        id={tLastWorkouts.id}
        pretitle={tLastWorkouts.title}
        title={tLastWorkouts.subtitle}
      >
        {tLastWorkouts.description}
      </SectionTitle>
      {/* TODO: add workouts from api */}
      <Faq />
      <C2a />
      <Footer />
      <PopUpWidget items={tPopUpWidget} />
    </PageContainer>
  );
}

Landingpage.layout = 'Blank';
