/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-orange': '#D57B0E',
        'enamel': '#F4E2D0',
        'deep-moss': '#3A5635',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

