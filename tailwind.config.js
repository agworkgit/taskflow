/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // enables class-based dark mode
  theme: {
    extend: {
      scale: {
        102: '1.010',
      },
    },
  },
  plugins: [],
};