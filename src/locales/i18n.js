import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { enUS, ruRU, ukUA } from '@mui/material/locale';
import enLocales from './en.json';
import ruLocales from './ru.json';
import uaLocales from './ua.json';

export const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
  },
  {
    label: 'Українська',
    value: 'ua',
    systemValue: ukUA,
  },
  {
    label: 'Русский',
    value: 'ru',
    systemValue: ruRU,
  },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enLocales },
      ru: { translation: ruLocales },
      ua: { translation: uaLocales },
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ru', 'ua'],
    nonExplicitSupportedLngs: true, // handles 'fr-FR' as 'fr'
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
