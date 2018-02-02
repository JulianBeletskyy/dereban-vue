<template>
</template>
<script>
	export default {
		name: 'Activate',
		created () {
			request.send('user/activate', {'hash': this.hash}, (data) => {
				if (data.token) {
					this.$cookie.set('token', data.token);
					alert.success('You are activate');
					setTimeout(() => {
						location.href = '/';
					}, 1200);
				}
			}, 'post');
		},
		props: ['hash']
	}
</script>