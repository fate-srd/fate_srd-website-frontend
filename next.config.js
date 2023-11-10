/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN, 'i.ytimg.com', 'yt3.ggpht.com'],
  },
};

module.exports = nextConfig;
