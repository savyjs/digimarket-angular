/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/shares/components/**/*.{html,ts}",
    "./src/shares/**/*.{html,ts}",
    "./src/**/*.{html,ts}",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      darkMode: true,
      colors: {
        transparent: 'transparent',
        primary: '#EF4056',
        secondary: '#008eb2',
        error: '#f44336',
        success: '#4caf50',
        alert: '#ff9800',
        dark: '#212121',
        gray: colors.gray,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia
      },
      fontFamily: {
        sans: ['IRANSans']
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ]
}
