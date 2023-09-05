import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dimmedGrey: '#A9A9A9',
        lightGrey: '#D9E3E3',
        darkRed: '#F2512D',
        lightRed: 'rgba(242, 81, 45, 0.15)',
				lightGreen: 'rgba(50, 227, 136, 0.15)',
				darkGreen: '#32E388'
      },
    },
  },
  plugins: [],
};
export default config;
