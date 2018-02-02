var playList = {
	result: [],
	playList: {
		'list': [],
		'type': ''
	},
	add (user) {
		this.result.push(user);
	},
	addResults (list, type) {
		this.playList.list = list;
		this.playList.type = type;
	},
	getResults () {
		return this.playList;
	},
	remove (id) {
		for (var k in this.result) {
	        if (this.result[k].id == id) {
	            this.result.splice(k, 1);
	        }
	    }
	},
	getPlayer (id) {
		for (var k in this.result) {
            if (this.result[k].id == id) {
                return true;
            }
        }
        return false;
	},
	getPlayers () {
		return this.result;
	},
	getCount () {
		return this.result.length;
	}
};

module.exports = playList;

module.exports.default = playList;