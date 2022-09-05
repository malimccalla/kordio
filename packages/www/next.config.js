/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['uploads-ssl.webflow.com'],
  },
  env: {
    NEXT_PUBLIC_API_ENDPOINT: 'http://localhost:4000',
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
