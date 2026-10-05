/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        bond: {
          50: '#FFFEFA',
          100: '#FDFBF7', /* Papel bond crema 70g */
          200: '#F5EFE6',
          300: '#EADFCF',
          400: '#D5C4AC',
          500: '#BCA88E',
        },
        carbon: {
          950: '#0C0C0B',
          900: '#141413', /* Gris carbón editorial */
          800: '#232321',
          700: '#3A3935',
          600: '#5A5953',
          400: '#8E8D86',
          300: '#ABA9A0',
          200: '#C7C6BE',
          100: '#E6E5DE',
        },
        terregal: {
          400: '#D66E53',
          500: '#C05A3E', /* Color teja / ladrillo noreste */
          600: '#A3452B',
          700: '#7E341F',
          800: '#562112',
          900: '#381308',
        },
        ochre: {
          300: '#E5BF7A',
          400: '#D4A359',
          500: '#BF8A3D',
          600: '#9E6F2C',
        }
      },
      fontFamily: {
        serif: ['"Newsreader"', 'Georgia', 'Cambria', 'serif'],
        display: ['"Cinzel"', '"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'book': '0 18px 38px -10px rgba(20, 20, 19, 0.28), 0 8px 16px -6px rgba(20, 20, 19, 0.15)',
        'book-hover': '0 25px 50px -12px rgba(20, 20, 19, 0.38), 0 12px 24px -8px rgba(163, 69, 43, 0.22)',
        'paper': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
      }
    },
  },
  plugins: [],
}
