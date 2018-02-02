<template>
	<div class="container demo-body text-center">
		<div class="d-flex justify-content-center">
			<div class="align-self-center">
				<form name="form">
					<h2>{{ langs.get('Enter your email') }}</h2>
					<div class="form-group">
						<input name="email" v-validate="'required:true|email'" type="email" class="form-control" v-model="recovery.email" />
					</div>
					<button type="button" class="btn btn-outline-success" @click="recoverySend">{{ langs.get('Recovery') }}</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Recovery',
		data () {
			return {
				langs: langs,
				recovery: {
					'url': location.href + 'recovery/{hash}'
				}
			}
		},
		methods: {
			recoverySend () {
				if (validator.check(this)) {
					request.send('user/forgotPassword', this.recovery, (data) => {
						router.push('/');
					}, 'post');
				}
			}
		}
	}
</script>