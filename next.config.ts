import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allows all origins, adjust as needed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
