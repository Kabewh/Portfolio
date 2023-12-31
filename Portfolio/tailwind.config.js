/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'handwritten': ['Rock Salt', 'cursive'],
        'thicc': ['Bowlby One', 'sans-serif']
      },
      backgroundImage: {
        'honeycomb': "url('./src/assets/honeycomb.png')",
      }
    },
  },
  plugins: [
    scrollbarHide,
  ],
}

