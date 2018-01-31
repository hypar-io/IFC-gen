const path = require('path');
var DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'lib')
	},
	/*plugins: [
		new DeclarationBundlerPlugin({
			moduleName: 'IFC',
			out: './lib/index.d.ts',
		})
	]*/
};