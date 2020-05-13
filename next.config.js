const withCSS = require('@zeit/next-css');
const dev = process.env.NODE_ENV !== 'production';

module.exports = withCSS({
	dev
});