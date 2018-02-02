var langs = {
	dict: VueCookie.get('langs') || 'en',
	set (dict) {
		VueCookie.set('langs', dict);
		if (VueCookie.get('token')) {
			request.send('user/changeLang', {'lang': dict}, (response) => {}, 'post');
		}
		this.dict = dict
	},
	init () {
		return this.dict
	},
	get(key) {
		for (var k in dictionary[this.init()]) {
			if (key.toLowerCase() == k.toLowerCase()) {
				return dictionary[this.init()][k];
			}
		}
		return key;
	}
};

module.exports = langs;

module.exports.default = langs;