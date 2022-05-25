module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html', './dist/index.cjs.js', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}