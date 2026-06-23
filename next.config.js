/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  turbopack: {
    // Prevent Turbopack from guessing the workspace root via lockfiles.
    // This repo lives under `Sites/fate_srd-website-frontend` while there's also
    // another `package-lock.json` elsewhere under `Sites/`.
    root: path.resolve(__dirname),
  },
  sassOptions: {
    // Quiet deprecation noise from third-party Sass (e.g. breakpoint-sass) and
    // our remaining legacy @import usage in assets/components/style.scss.
    quietDeps: true,
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
  },
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
