var path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['html-loader', './src/loader/md-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
  },
}
