import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { LANGS } from './locales/i18n.js';

const LanguageGuard = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const [languageValid, setLanguageValid] = useState(null);

  useEffect(() => {
    if (!lang) {
      setLanguageValid(true);
      return;
    }

    if (!LANGS.find((l) => l.value === lang)) {
      navigate('/404', { replace: true });

      setLanguageValid(false);
      return;
    }

    if (i18n.resolvedLanguage !== lang) {
      i18n.changeLanguage(lang);
    }
    setLanguageValid(true);
  }, [lang, i18n, navigate]);

  if (languageValid === null) {
    return null;
  }

  if (!languageValid) {
    return null;
  }

  return <Outlet />;
};

export { LanguageGuard };
