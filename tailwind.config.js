/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b2a3',
          400: '#7d917d',
          500: '#627562',
          600: '#4d5d4d',
          700: '#404a40',
          800: '#353d35',
          900: '#2d332d',
        },
        blush: {
          50: '#fdf8f6',
          100: '#f9ede8',
          200: '#f2ddd4',
          300: '#e8c5b5',
          400: '#dba58e',
          500: '#cd8a6b',
          600: '#be7355',
          700: '#9f5f47',
          800: '#82503e',
          900: '#6a4335',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e4',
          300: '#f5e8d0',
          400: '#eed9b3',
          500: '#e4c78a',
          600: '#d6b162',
          700: '#c19947',
          800: '#9d7d3c',
          900: '#7f6633',
        },
        pearl: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
};