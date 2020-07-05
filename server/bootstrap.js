require('ignore-styles')

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    //"@babel/plugin-transform-modules-commonjs",
    '@babel/plugin-transform-runtime',
  ],
})

require('./index')
