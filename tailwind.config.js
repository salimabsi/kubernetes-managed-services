const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        lime: colors.lime,
        fuchsia: colors.fuchsia,
      },
      fontFamily: {
        'Inter': ['Inter', ...defaultTheme.fontFamily.sans],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
