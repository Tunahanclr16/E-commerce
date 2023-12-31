/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        md:'1027px',
        lg:'1300px'
      }
    },
  },
  plugins: [],
}