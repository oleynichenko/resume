import { useTranslation } from "react-i18next";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "de" }, { lang: "uk" }];
}

export default function LocaleLayout({ children, params }) {
  return <div>{children}</div>;
}
