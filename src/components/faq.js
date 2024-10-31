// @ts-nocheck
import SectionTitle from '@/components/sectionTitle';
import Accordion from '@/components/accordion';
import { useTranslation } from 'react-i18next';
import Container from './container';

const Faq = () => {
  const { t } = useTranslation();
  const tFaq = t('FaqSection', { returnObjects: true });

  return (
    <>
      <SectionTitle id="Faq" pretitle="FAQ" title={tFaq.subTitle}>
        {tFaq.description}
      </SectionTitle>
      <Container className="!p-0">
        <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
          {tFaq.questions.map((item, key) => (
            <div key={key} className="mb-5">
              <Accordion title={item.title} content={item.desc} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Faq;
