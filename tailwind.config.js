const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {typeof defaultTheme} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
    fontFamily: {
      heading: [
        'Helvetica',
        ...defaultTheme.fontFamily.sans
      ],
      sans: [
        'Avenir LT Std',
        ...defaultTheme.fontFamily.sans
      ]
    },
  },
  plugins: [],
}
