const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const GitRevisionPlugin = require('git-revision-webpack-plugin')

const { publicPath } = require('./config.json')
const package = require('../package.json')

module.exports = {
  mode: 'none',
  target: 'web',
  entry: {
    'luge': '../src/js/luge.js',
  },
  resolve: {
    alias: {
      Luge: path.resolve(__dirname, '../src/js/luge/'),
      Core: path.resolve(__dirname, '../src/js/luge/core/'),
      Plugins: path.resolve(__dirname, '../src/js/luge/plugins/'),
    }
  },
  experiments: {
    outputModule: true,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/js'),
    publicPath: publicPath,
    library: {
      type: 'module'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: '> 1%, not dead',
                corejs: 3,
                useBuiltIns: 'usage'
              }]
            ],
            plugins: ['@babel/plugin-proposal-nullish-coalescing-operator'],
            cacheDirectory: true,
          }
        },
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      context: '../'
    }),
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(package.version)
    })
  ],
};
