import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*).jpngn.com',
          },
        ],
        destination: '/api/subdomain?subdomain=:subdomain&path=:path*',
      },
    ];
  },
};

export default nextConfig;
