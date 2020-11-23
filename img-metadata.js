const fs = require('fs');
const { promisify } = require('util');
const sizeOf = promisify(require('image-size'));

(async () => {
	try {
		const dir = '/Users/joshuamcclure/Desktop/BestOfRoscoe';
		const files = fs.readdirSync(dir);
		const resp = [];
		for (let i=0; i<files.length; i++) {
			const dim = await sizeOf(`${dir}/${files[i]}`);
			resp.push({
				src: files[i],
				alt: '',
				width: dim.width,
				height: dim.height,
			});
		}
		fs.writeFileSync('./src/_images.json', JSON.stringify(resp, null, 4), 'utf8', {});
	} catch (err) {
		console.error(err);
	}
})();