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
        purple: {
          450: '#9C69E2',
        },
        rose: {
          150: '#FDE8F4',
        },
        pink: {
          450: '#F063B8',
        },
        teal: {
          450: '#68C9BA',
        },
        sky: {
          550: '#2D9CDB',
        },
      },
      borderRadius: {
        '4xl': '3.125rem'
      }
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
