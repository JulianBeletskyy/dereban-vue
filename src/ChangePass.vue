<template>
	<div class="container demo-body text-center">
		<div class="d-flex justify-content-center">
			<div class="align-self-center">
				<form name="form">
					<h2>Change password</h2>
					<div class="form-group">
						<label>New password</label>
						<input name="new password" v-validate="'required:true|min:6'" type="password" class="form-control"  v-model="pass.password" required="required"  />
					</div>
					<div class="form-group">
						<label>Confirm password</label>
						<input name="confirm password" v-validate="'required:true|min:6|confirmed:new password'" type="password" class="form-control" v-model="pass.password_confirmation" required="required" />
					</div>
					<button type="button" class="btn btn-outline-success" @click="changePass">Change password</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ChangePass',
		data () {
			return {
				pass: {
					'hash': this.hash
				}
			}
		},
		props: ['hash'],
		methods: {
			changePass () {
				if (validator.check(this)) {
					request.send('user/changePassword', this.pass, (data) => {
                    	router.push('/');
                    }, 'post');
				}
			}
		}
	}
</script>