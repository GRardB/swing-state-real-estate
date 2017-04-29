const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const PATH = __dirname + '/dist'

const appConfig = {
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
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules',
            'sass-loader',
          ],
        }),
      },
    ],
  },

  output: {
    filename: '[name].js',
    path: PATH,
  },

  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
  },
}

const foundationConfig = {
  entry: {
    foundation: [
      './src/static/foundation.css',
    ],
  },

  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules',
            'sass-loader',
          ],
        }),
      },
    ],
  },

  output: {
    filename: '[name].js',
    path: PATH,
  },

  plugins: [
    new ExtractTextPlugin('foundation.css'),
  ],
}

module.exports = [ appConfig, foundationConfig ]
