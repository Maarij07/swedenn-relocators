import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['flagcdn.com'],
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
