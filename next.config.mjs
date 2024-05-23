/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
