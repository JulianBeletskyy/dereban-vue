var logger = {
	option: {
		'closeButton': true,
		'positionClass': 'toast-bottom-right',
		'timeOut': '2000',
		'newestOnTop': true
	},
	logIt (text, type) {
		toastr.options = this.option;
		this[type](langs.get(text));
	},
	info (text) {
		toastr.info(text);
	},
	success (text) {
		toastr.success(text);
	},
	error (text) {
		toastr.error(text);
	},
	warning (text) {
		toastr.warning(text);
	}
};

module.exports = logger;

module.exports.default = logger;