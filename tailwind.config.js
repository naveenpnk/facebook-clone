/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'logo' : ['Sunshiney', 'cursive']
    },
    colors : {
      'green' : '#00CBA9',
      'light' : '#93E9BE',
      'dark' : '#0b3c34',
      'white' : '#fff'
    },
    extend: {},
  },
  // tailwind.config.js
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}