import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../../assets/lang/en.json';
import translationES from '../../assets/lang/es.json';
import detector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
