const kebabcase = require('lodash.kebabcase');
const tokens = require('./assets/javascripts/tokens');

const colors = Object.fromEntries(Object
  .values(tokens.color)
  .map(({
    attributes,
    value
  }) => [
    kebabcase(attributes.type), value
  ])
);

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './dist/index.cjs.js',
    // './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}