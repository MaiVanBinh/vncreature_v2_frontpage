/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["butterfly-conservation.org", "www.vncreatures.net", "vncreatures.net"],
  },
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    env: process.env.ENV || 'development',
    release: process.env.RELEASE || 'lastest',
    URL: {
      BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
      V_API: process.env.V_API || 'http://localhost:3000',
    },
    TURN_ON_LOCATION: +process.env.TURN_ON_LOCATION || 0,
    isShowRoundTrip: +process.env.IS_SHOW_ROUND_TRIP || false,
  },
};

module.exports = nextConfig;
