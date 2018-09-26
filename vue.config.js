const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	baseUrl: './',
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'));
	}
};
