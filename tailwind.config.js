/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,astro}",
  ],
  theme: {
    extend: {
      colors: {
        'gati-verde': '#4CAF50',
        'gati-marron': '#8F6228',
        'gati-naranja': '#FF5722',
        'gati-morado': '#9747FF',
        'gati-amarillo': '#FFC107',
        'gati-azul': '#2196F3',
        'gati-cielo': '#81D4FA',
        'gati-bg': '#e3e2de',
        'gati-card-bg': 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        'chewy': ['"Chewy"', 'cursive'],
        'barlow': ['"Barlow Condensed"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/img/herobg.png')",
      }
    },
  },
  plugins: [],
}
