/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/maniadbapi/:path*',
        destination: 'http://www.maniadb.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
