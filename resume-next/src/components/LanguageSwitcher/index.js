"use client";

import { Button, ButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "de", label: "DE" },
  { code: "uk", label: "UK" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const pathname = usePathname();

  // Extract the current language from the pathname
  const currentLang = pathname.split("/")[1] || "en";

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <ButtonGroup
      variant="outlined"
      size="small"
      sx={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 1000,
      }}
    >
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={lang.code === "en" ? "/" : `/${lang.code}`}
          passHref
        >
          <Button
            onClick={() => handleLanguageChange(lang.code)}
            sx={{
              backgroundColor:
                currentLang === lang.code ? "primary.main" : "transparent",
              color: currentLang === lang.code ? "white" : "inherit",
              "&:hover": {
                backgroundColor:
                  currentLang === lang.code ? "primary.dark" : "action.hover",
              },
            }}
          >
            {lang.label}
          </Button>
        </Link>
      ))}
    </ButtonGroup>
  );
}
