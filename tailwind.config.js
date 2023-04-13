/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto Mono', "monospace"],
        Archivo: [ 'Archivo Narrow', 'sans-serif'],
        Lato:['Lato', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

