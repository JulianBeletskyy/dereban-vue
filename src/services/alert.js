var alert = {
	obj: {
		title: '',
		type: 'info',
		position: 'center',
		timer: 1000,
		showConfirmButton: false,
		animation: true,
	},
	info (text, timer) {
		this.obj.title = text;
		swal(this.obj);
	},
	success (text, timer) {

		this.obj.title = text;
		this.obj.timer = timer || this.obj.timer;
		this.obj.type = 'success';
		swal(this.obj);
	},
	error (text, timer) {
		this.obj.title = text;
		this.obj.timer = timer || this.obj.timer;
		this.obj.type = 'error';
		swal(this.obj);
	},
	warning (text, timer) {
		this.obj.title = text;
		this.obj.timer = timer || this.obj.timer;
		this.obj.type = 'warning';
		swal(this.obj);
	},
	question (text, timer) {
		this.obj.title = text;
		this.obj.timer = timer || this.obj.timer;
		this.obj.type = 'question';
		swal(this.obj);
	}
};

module.exports = alert;

module.exports.default = alert;