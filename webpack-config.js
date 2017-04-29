const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const PATH = __dirname + '/dist'

module.exports = {
  entry: {
    app: [
      './src/app.js',
    ],
  },

  devServer: {
    compress: true,
    contentBase: './dist',
    historyApiFallback: {
      index: 'index.html'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },

  output: {
    filename: '[name].js',
    path: PATH,
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],

  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
  },
}
