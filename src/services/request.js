var request = {
	send(url, data, method) {
		method = method || 'post';
		data = data || {};
		var baseUrl = 'http://dereban-api.da/api/v1/';

		var req = axios.create({
			baseURL: 'http://dereban-api.da/api/v1/'
		});

		req[method](baseUrl + url, data).then((response) => {
            console.log(response)
        }).catch((error) => {
        	console.log(error);
        });
	}
};

module.exports = request;

module.exports.default = request;