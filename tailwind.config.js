/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basic : '#FF6100',
        secondary:"#FF3008"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}