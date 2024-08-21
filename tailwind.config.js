/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Adventure Time Logo']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
