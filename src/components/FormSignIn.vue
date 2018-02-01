<template>
	<form id="FormSignIn" name="form" class="px-4 py-3">
        <div class="form-group">
			<label>Email</label>
			<input name="email" class="form-control mr-sm-2" v-model="user.email" type="text" placeholder="email@example.com" required="required" />
        </div>
        <div class="form-group">
			<label>Password</label>
			<input name="password" class="form-control mr-sm-2" v-model="user.password" type="password" required="required" />
        </div>
        <div class="d-flex">
            <button type="button" class="btn btn-outline-success my-2 my-sm-0" @click="signIn">Sign In</button>
            <b-dd-item>
            	<router-link to="/recovery" class="align-self-center ml-auto">Forgot password</router-link>
            </b-dd-item>
        </div>
    </form>
</template>

<script>
	export default {
		name: 'FormSignIn',
		data () {
		    return {
				user: {}
		    }
	  	},
		methods: {
			signIn() {
				var error = 1;
				if ( ! this.user.email) {
					error = 0;
				}
				if ( ! this.user.password) {
					error = 0;
				}
				if (error) {
					request.send('user/login', this.user, (data) => {
						if (data.token) {
							this.$cookie.set('token', data.token);
							alert.success('You are in', 'center', false, ' ');
							setTimeout(() => {
								location.href = '/';
							}, 1200);
						}
					}, 'post');
				}
			},
			test (event) {
				event.stopPropagation();
			}
		}
	}
</script>

<style lang="css">
	.dropdown-item:hover,
	.dropdown-item:active,
	.dropdown-item:focus {
		background-color: inherit;
		text-align: right;
		border: 0;
		outline: none;
	}
</style>