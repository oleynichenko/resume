"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import all translation files
import enCommon from "@/locales/en/common.json";
import ruCommon from "@/locales/ru/common.json";
import deCommon from "@/locales/de/common.json";
import ukCommon from "@/locales/uk/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
      },
      ru: {
        common: ruCommon,
      },
      de: {
        common: deCommon,
      },
      uk: {
        common: ukCommon,
      },
    },
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 1,
    },
    defaultNS: "common",
    ns: ["common"],
  });

export default i18n;
