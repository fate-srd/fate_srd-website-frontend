/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fatesrd.amazingrando.dev',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/stunt-maker',
        destination: '/stuntmaker/index.html',
        permanent: true,
        basePath: false,
      },
      {
        source: '/stuntmaker',
        destination: '/stuntmaker/index.html',
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
