const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,

      darkwater: {
        light: '',
        DEFAULT: '#21272b',
        dark: '',
      },

    },

    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.trueGray,
    //   indigo: colors.indigo,
    //   red: colors.rose,
    //   yellow: colors.amber,
    // },

    extend: {
      fontFamily: {
        'robotoMono' : ['"Roboto Mono"', 'monospace',],
        'yeseva' :['"Yeseva One"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
