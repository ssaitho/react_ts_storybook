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

const text = Object.fromEntries(Object
  .values(tokens.text)
  .map(({
    attributes,
    value
  }) => [
    kebabcase(attributes.type), value
  ])
);
console.log(colors);
console.log(text);

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './dist/index.cjs.js',
  ],
  theme: {
    extend: {
      colors,
      text,
    },
  },
  plugins: [
  ],
}