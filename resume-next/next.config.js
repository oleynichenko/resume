/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ru", "de", "uk"],
    defaultLocale: "en",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
