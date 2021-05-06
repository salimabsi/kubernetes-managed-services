const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        blueGray: colors.blueGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        warmGray: colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
      fontFamily: {
        'Inter': ['Inter'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
