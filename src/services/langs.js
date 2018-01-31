var langs = {
	get(key) {
		request.getLangs('src/langs/uk.json', function(data) {
			for (var k in data) {
				if (key.toLowerCase() == k.toLowerCase()) {
					key = data[k];
				}
			}
		}, 'get');
	}
};

module.exports = langs;

module.exports.default = langs;