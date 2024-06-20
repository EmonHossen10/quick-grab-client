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
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}