const { resolve } = require('path')

module.exports = {
  entry: {
    monorail: resolve(__dirname, 'src')
  },
  output: {
    path: resolve(__dirname, 'dist', 'components'),
    library: 'monorail',
    libraryTarget: 'umd',
    filename: '[name].js',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  }
}