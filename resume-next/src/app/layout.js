"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/styles/theme";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "@/utils/i18n";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Resume - Oleynichenko Alexandr",
  description: "Frontend Developer Resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LanguageSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
