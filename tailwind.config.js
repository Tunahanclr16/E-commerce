/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        md:'1199px',
        lg:'1300px',
        sm:'540px',
        xs:'380px'
      }
    },
  },
  plugins: [],
}