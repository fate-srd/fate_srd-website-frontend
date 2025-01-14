import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        fate: {
          '50': 'rgba(10, 187, 203, 1)',
          '100': 'rgba(12, 163, 201, 1)',
          '200': 'rgba(14, 139, 199, 1)',
          '300': 'rgba(16, 117, 198, 1)',
          '400': 'rgba(18, 96, 196, 1)',
          '500': 'rgba(20, 75, 194, 1)',
          '600': 'rgba(23, 56, 192, 1)',
          '700': 'rgba(25, 38, 189, 1)',
          '800': 'rgba(34, 28, 187, 1)',
          '900': 'rgba(55, 30, 184, 1)',
          '950': 'rgba(74, 33, 182, 1)',
        },
        neutrals: {
          '50': 'rgba(226, 230, 239, 1)',
          '100': 'rgba(198, 206, 223, 1)',
          '200': 'rgba(172, 182, 205, 1)',
          '300': 'rgba(146, 158, 187, 1)',
          '400': 'rgba(120, 135, 169, 1)',
          '500': 'rgba(98, 113, 147, 1)',
          '600': 'rgba(82, 94, 119, 1)',
          '700': 'rgba(65, 74, 92, 1)',
          '800': 'rgba(48, 53, 65, 1)',
          '900': 'rgba(30, 33, 39, 1)',
          '950': 'rgba(11, 12, 14, 1)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
