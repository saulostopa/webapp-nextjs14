import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arabic from './languages/ar.json';
import chinese from './languages/ch.json';
import english from './languages/en.json';
import french from './languages/fr.json';
import portuguese from './languages/br.json';

const resources = {
  br: {
    translation: portuguese,
  },
  en: {
    translation: english,
  },
  fr: {
    translation: french,
  },
  ar: {
    translation: arabic,
  },
  ch: {
    translation: chinese,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
