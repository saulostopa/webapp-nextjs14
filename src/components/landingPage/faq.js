// @ts-nocheck
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import Container from '@/components/utils/container';
import SectionTitle from '@/components/landingPage/sectionTitle';

const Faq = () => {
  const { t } = useTranslation();
  const tFaq = t('FaqSection', { returnObjects: true });

  return (
    <>
      <SectionTitle id="Faq" pretitle="FAQ" title={tFaq.subTitle}>
        {tFaq.description}
      </SectionTitle>
      <Container className="!p-0">
        <div className="max-w-2xl mx-auto">
          {tFaq.questions.map((item, key) => (
            <div key={key} className="mb-5">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="text-lg p-2 !py-2"
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails className="px-4 pt-4 pb-2">
                  {item.desc}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Faq;
