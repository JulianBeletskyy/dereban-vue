var playList = {
	result: [],
	add(user) {
		this.result.push(user);
		console.log(this.result);
	},
	remove(id) {
		for (var k in this.result) {
	        if (this.result[k].id == id) {
	            this.result.splice(k, 1);
	        }
	    }
	},
	getPlayer(id) {
		for (var k in this.result) {
            if (this.result[k].id == id) {
                return true;
            }
        }
        return false;
	},
	getPlayers() {
		return this.result;
	},
	getCount() {
		console.log(this.result);
		return this.result.length;
	}
};

module.exports = playList;

module.exports.default = playList;