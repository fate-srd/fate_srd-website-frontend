/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
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
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		colors: {
  			blue: {
  				DEFAULT: '#1B75BC',
  				dark: '#15598F',
  				darker: '#0D436D',
  				darkest: '#0A3B62',
  				darkestest: '#063255',
  				light: '#DBEFFF'
  			},
  			yellow: {
  				DEFAULT: '#FFEA9F',
  				light: '#FFF8B9',
  				dark: '#95813A'
  			},
  			gray: {
  				dark: '#434343',
  				medium: '#e5e5e5',
  				light: '#F9F9F9'
  			},
  			white: '#fff',
  			dark: '#434343',
  			'footer-bg': 'rgba(46, 45, 45, 0.6)',
  			'patreon-orange': '#E85B46',
  			new: '#FF2828',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'fate': {
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
  			'neutrals': {
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
  		screens: {
  			xs: '475px',
  			'3xl': '1920px'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'72': '18rem',
  			'84': '21rem',
  			'96': '24rem'
  		},
  		fontFamily: {
  			sans: [
  				'Mona Sans',
  				'system-ui',
  				'sans-serif'
  			],
  			mona: [
  				'Mona Sans',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
};
