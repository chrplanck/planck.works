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
        serif: ['var(--font-noto-serif)'],
      },
    },
  },
  plugins: [],
};
