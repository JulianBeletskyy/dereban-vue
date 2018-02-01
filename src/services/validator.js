

var validator = {
	check(fields) {
		toastr.options = {
            "closeButton": true,
            "positionClass": "toast-bottom-right",
            "timeOut": "2000",
            "newestOnTop": true
        };
		if (fields.$validator.errors.items.length) {
			for (var k in fields.$validator.errors.items) {
				var msg = fields.$validator.errors.items[k].msg;
				toastr.error(msg);
			}
			return 0;
		}
	}
};

module.exports = validator;

module.exports.default = validator;