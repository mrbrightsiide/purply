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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // SVGR options can be added here if needed
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
