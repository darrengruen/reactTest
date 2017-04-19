module.exports = {
	entry: `./src/index.js`,
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2'
		}]
	},
	output: {
		filename: `./dist/index.js`
	},
	plugins: [],
	watch: true
};
