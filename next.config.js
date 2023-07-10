/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  compiler: {
    styledComponents: false,
  },
  images: {
    domains: ["butterfly-conservation.org", "www.vncreatures.net"],
  },
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
  },
  // react: { useSuspense: false }, //this line
};

module.exports = nextConfig;
