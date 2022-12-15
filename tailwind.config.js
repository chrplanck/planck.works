/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'dark-grey': '#4b4b4b',
      orange: '#ff6f61',
      sand: '#eeeae6',
      stone: '#d1d1cd',
      white: '#fff',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        serif: ['var(--font-playfair-display)'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
