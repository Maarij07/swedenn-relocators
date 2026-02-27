import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['flagcdn.com', 'api.swedenrelocators.se'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
