/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN, 'i.ytimg.com', 'yt3.ggpht.com'],
  },
  async redirects() {
    return [
      {
        source: '/stunt-maker',
        destination: '/stuntmaker/index.html',
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
