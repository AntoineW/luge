const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const { webpack } = require('./config.json')

module.exports = {
  target: 'web',
  entry: {
    'luge': '../src/js/luge.js',
    'demo': '../demo/src/js/demo.js',
  },
  resolve: {
    alias: {
      Luge: path.resolve(__dirname, '../src/js/luge/'),
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/js'),
    publicPath: webpack.publicPath
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
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
            cacheDirectory: true,
          }
        },
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WriteFilePlugin({
      test: /^(?!.*(hot)).*/,
    })
  ],
};
