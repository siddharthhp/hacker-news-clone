require('ignore-styles')

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
  ],
})

require('./index')
