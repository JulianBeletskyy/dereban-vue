<template>
	<form id="FormSignIn" name="FormSignIn" class="px-4 py-3">
        <div class="form-group">
			<label>Email</label>
			<input name="email" v-validate="'required|email'" class="form-control mr-sm-2" v-model="user.email" placeholder="email@example.com" />
        </div>
        <div class="form-group">
			<label>Password</label>
			<input name="password" v-validate="'required'" class="form-control mr-sm-2" v-model="user.password" type="password" required="required" />
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
				error *= validator.check(this);
				if (error) {
					request.send('user/login', this.user, (data) => {
						if (data.token) {
							this.$cookie.set('token', data.token);
							alert.success('You are in');
							setTimeout(() => {
								location.href = '/';
							}, 1200);
						}
					}, 'post');
				}
			}
		}
	}
</script>

<style scoped>
	.dropdown-item,
	.dropdown-item:hover,
	.dropdown-item:active,
	.dropdown-item:focus {
		background-color: #fff;
		text-align: right;
		border: 0;
		outline: none;
	}
</style>