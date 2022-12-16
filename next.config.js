/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["wpstaging.tomthorley.digital", "secure.gravatar.com"],
  },
};

module.exports = nextConfig;
