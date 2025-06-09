// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://3.109.213.148:8080/:path*', // Proxy to EC2
      },
    ];
  },
};

module.exports = nextConfig;
