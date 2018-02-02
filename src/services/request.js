var request = {
	send(url, data, callback, method) {
		method = method || 'post';
		callback = callback || false;
		data = data || {};

		var req = axios.create({
			baseURL: 'http://dereban-api.da/api/v1/',
			headers: {'Authorization': 'Bearer ' + VueCookie.get('token')}
		});

		req[method](url, data, callback).then((response) => {
			if (response.data.message) {
				logger.logIt(response.data.message, 'success');
			}
            (callback)(response.data.data);
        }).catch((error) => {
        	if (error.response.data.validate) {
        		for (var k in error.response.data.validate) {
        			for (var j in error.response.data.validate[k]) {
        				logger.logIt(error.response.data.validate[k][j], 'error');
        			}
        		}
        	}

        	if (error.response.data.message) {
        		logger.logIt(error.response.data.message, 'error');
        	}
        });
	},
	getLangs(url, callback) {
		var method = 'get';

		var req = axios.create({
			baseURL: ''
		});

		req[method](url, {}, callback).then((response) => {
            (callback)(response.data);
        }).catch((error) => {
        	console.log(error);
        });
	}
};

module.exports = request;

module.exports.default = request;