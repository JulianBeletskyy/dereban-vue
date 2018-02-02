var validator = {
	check(fields) {
		if (fields.$validator.errors.items.length) {
			for (var k in fields.$validator.errors.items) {
				var msg = fields.$validator.errors.items[k].msg;
				logger.logIt(msg, 'error');
			}
			return false;
		}
		return 1;
	}
};

module.exports = validator;

module.exports.default = validator;