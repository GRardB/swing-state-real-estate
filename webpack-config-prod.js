const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const PATH = __dirname + '/docs'

const appConfig = {
  entry: {
    app: [
      './src/app.js',
    ],
  },

  devServer: {
    compress: true,
    contentBase: './docs',
    historyApiFallback: true,
    disableHostCheck: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
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
      {
        test: /\.png|\.svg|\.jpg/,
        use: 'file-loader?name=[name].[ext]'
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },

      IS_PRODUCTION: true,
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
            'css-loader',
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
