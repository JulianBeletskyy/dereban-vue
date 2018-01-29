var storage = {
	save(data) {
		var date = new Date();
		var id = date.getTime() + '' + date.getMilliseconds();
		var playerObj = {'name': data.name, 'play': data.play, 'id': id};
		var list = this.get();
		list.push(playerObj);
		localStorage.setItem('players', JSON.stringify(list));
	},
	get() {
		var result = localStorage.getItem('players');
		return result ? JSON.parse(result) : [];
	},
	remove(id) {
		var list = this.get();
		
		for (var k in list) {
			if (list[k].id == id) {
				list.splice(k, 1);
			}
		}
		localStorage.clear();
		localStorage.setItem('players', JSON.stringify(list));
	}
};

module.exports = storage;

module.exports.default = storage;