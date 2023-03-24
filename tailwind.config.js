/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html, js}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'semi-transparent': 'rgba(255, 255, 255, .05)',
        'md-transparent': 'rgba(255, 255, 255, .1)',
        'active-color': '#84A98C',
        'unactive-color': '#52796F',
        'basic-color': '#CAD2C5',
        'dark-basic-color': '#2F3E46',
      },
      fontFamily: {
        'paragraph': ['poppins'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
