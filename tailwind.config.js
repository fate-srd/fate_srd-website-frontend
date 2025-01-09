/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Brand colors
        blue: {
          DEFAULT: '#1B75BC',
          dark: '#15598F',
          darker: '#0D436D',
          darkest: '#0A3B62',
          darkestest: '#063255',
          light: '#DBEFFF',
        },
        yellow: {
          DEFAULT: '#FFEA9F',
          light: '#FFF8B9',
          dark: '#95813A',
        },
        gray: {
          dark: '#434343',
          medium: '#e5e5e5',
          light: '#F9F9F9',
        },
        // Utility colors
        white: '#fff',
        dark: '#434343',
        'footer-bg': 'rgba(46, 45, 45, 0.6)',
        'patreon-orange': '#E85B46',
        new: '#FF2828',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Mona Sans', 'system-ui', 'sans-serif'],
        mona: ['Mona Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
