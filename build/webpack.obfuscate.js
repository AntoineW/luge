const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackObfuscator = require('webpack-obfuscator');

const { webpack } = require('./config.json')

module.exports = merge(common, {
	mode: 'production',
  output: {
    filename: '[name].obfuscated.js',
    path: path.resolve(__dirname, '../dist/js'),
    publicPath: webpack.publicPath
  },
  plugins: [
    new WebpackObfuscator ({
      domainLock: ['luge-dev.wrk', 'luge-starter-wp.wrk'],
      compact: true,
      controlFlowFlattening: false,
      deadCodeInjection: false,
      debugProtection: false,
      debugProtectionInterval: false,
      disableConsoleOutput: false,
      identifierNamesGenerator: 'mangled',
      log: false,
      numbersToExpressions: false,
      renameGlobals: false,
      rotateStringArray: false,
      selfDefending: false,
      shuffleStringArray: false,
      simplify: true,
      splitStrings: false,
      stringArray: false,
      stringArrayEncoding: [],
      stringArrayIndexShift: true,
      stringArrayWrappersCount: 1,
      stringArrayWrappersChainedCalls: true,
      stringArrayWrappersParametersMaxCount: 2,
      stringArrayWrappersType: 'variable',
      stringArrayThreshold: 0.75,
      unicodeEscapeSequence: false
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ],
});
