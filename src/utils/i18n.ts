import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import portuguese from './languages/br.json';
import english from './languages/en.json';

const resources = {
  br: {
    translation: portuguese,
  },
  en: {
    translation: english,
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
