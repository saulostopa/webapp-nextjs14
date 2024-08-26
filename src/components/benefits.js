// import {useTranslations} from 'next-intl';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Container from './utils/container';
import benefitOneImg from '@/public/images/landingpage/benefit-one-v2.png';
import benefitTwoImg from '@/public/images/landingpage/benefit-two-v2.png';

config.autoAddCss = false;
library.add(fas);

const Benefits = (props) => {
  const { option } = props;
  const image = option === 'one' ? benefitOneImg : benefitTwoImg;
  // const o = useTranslations('IndexPage.benefitOne');
  // const t = useTranslations('IndexPage.benefitTwo');
  const { t } = useTranslation();

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <Image
              src={image}
              width="521"
              height="auto"
              alt="Benefits"
              className={'object-cover'}
              placeholder="blur"
              blurDataURL={image.src}
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>
        <div
          id={option === 'two' ? t(`id`) : o(`id`)}
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === 'right' ? 'lg:justify-end' : ''
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {option === 'two' ? t(`title`) : o(`title`)}
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {option === 'two' ? t('description') : t('description')}
              </p>
            </div>
            {option === 'one' &&
              o.raw('items').map((item, key) => (
                <div className="w-full mt-5" key={key}>
                  <div className="flex items-start mt-8 space-x-3">
                    <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-s2pro-primary rounded-md w-11 h-11 ">
                      <FontAwesomeIcon
                        icon={['fas', o(`items.${key}.icon`)]}
                        className="w-7 h-5 text-s2pro-primary"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                        {o(`items.${key}.title`)}
                      </h4>
                      <p className="mt-1 text-gray-500 dark:text-gray-400">
                        {o(`items.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {/* {option === 'two' && t.raw("items").map((item, key) => (
              <div className="w-full mt-5" key={key}>
                <div className="flex items-start mt-8 space-x-3">
                  <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-s2pro-primary rounded-md w-11 h-11 ">
                    <FontAwesomeIcon icon={['fas', t(`items.${key}.icon`)]} className='w-7 h-5 text-s2pro-primary' />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">{t(`items.${key}.title`)}</h4>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">{t(`items.${key}.desc`)}</p>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Benefits;
