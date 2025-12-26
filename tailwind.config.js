/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gati-verde': '#4CAF50',
        'gati-marron': '#8F6228',
        'gati-naranja': '#FF5722',
        'gati-morado': '#9747FF',
        'gati-bg': '#e3e2de',
      },
      fontFamily: {
        'mango': ['"Mango AC"', 'cursive'],
        'barlow': ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
