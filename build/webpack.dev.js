const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { webpack } = require('./config.json')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map'
});
