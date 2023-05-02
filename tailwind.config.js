/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'martel': ['Martel', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/girl-sitting.jpg')",
      },
      backgroundPosition: {
        'right-bottom': '55% 20%',
      },
    },
  },
  plugins: [],
}
