var request = {
	send(url, data, callback, method) {
		method = method || 'post';
		callback = callback || false;
		data = data || {};

		var req = axios.create({
			baseURL: 'http://dereban-api.da/api/v1/'
		});

		req[method](url, data, callback).then((response) => {
            (callback)(response.data.data);
        }).catch((error) => {
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