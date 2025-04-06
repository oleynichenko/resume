import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { enUS, ruRU } from '@mui/material/locale';
import enLocales from './en.json';
import ruLocales from './ru.json';

export const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
  },
  {
    label: 'Русский',
    value: 'ru',
    systemValue: ruRU,
  },
];

// const langStorage = localStorage.getItem('i18nextLng');
// const currentLang =
//   LANGS.find((lang) => lang.value === langStorage) || LANGS[1];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enLocales },
      ru: { translation: ruLocales },
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
