// @ts-nocheck
import { useTranslation } from 'react-i18next';
import Container from '@/components/utils/container';

const Cta = () => {
  const { t } = useTranslation();
  const tIndexPage = t('IndexPage', { returnObjects: true });

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-slate-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            {tIndexPage.bannerFooterTitle}
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {tIndexPage.bannerFooterText}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/auth/login"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-s2pro-primary bg-s2pro-primary rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Download
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
