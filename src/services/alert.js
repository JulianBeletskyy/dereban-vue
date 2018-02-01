var alert = {
	obj: {
		title: '',
		type: 'info',
		position:  'bottom-end',
		timer: 1000,
		showConfirmButton: false,
		animation: true,
		padding: 2.75,
		customClass: 'box-shadow-modal'
	},
	info (text, position, timer, back) {
		this.obj.title = text;
		swal(this.obj);
	},
	success (text, position, timer, back) {

		this.obj.title = text;
		this.obj.customClass = back || this.obj.customClass;
		this.obj.position = position || this.obj.position;
		this.obj.timer = timer || this.obj.timer;
		this.obj.type = 'success';
		swal(this.obj);
	},
	error (text, position, timer, back) {
		this.obj.title = text;
		this.obj.customClass = back || this.obj.customClass;
		this.obj.position = position || this.obj.position;
		this.obj.timer = timer || this.obj.timer;
		this.obj.type = 'error';
		swal(this.obj);
	},
	warning (text, position, timer, back) {
		this.obj.title = text;
		this.obj.customClass = back || this.obj.customClass;
		this.obj.position = position || this.obj.position;
		this.obj.timer = timer || this.obj.timer;
		this.obj.type = 'warning';
		swal(this.obj);
	},
	question (text, position, timer, back) {
		this.obj.title = text;
		this.obj.customClass = back || this.obj.customClass;
		this.obj.position = position || this.obj.position;
		this.obj.timer = timer || this.obj.timer;
		this.obj.type = 'question';
		swal(this.obj);
	}
};

module.exports = alert;

module.exports.default = alert;