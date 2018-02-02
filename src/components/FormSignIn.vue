<template>
	<form id="FormSignIn" name="FormSignIn" class="px-4 py-3">
        <div class="form-group">
			<label>{{ langs.get('Email') }}</label>
			<input name="email" v-validate="'required|email'" class="form-control mr-sm-2" v-model="user.email" placeholder="email@example.com" />
        </div>
        <div class="form-group">
			<label>{{ langs.get('Password') }}</label>
			<input name="password" v-validate="'required'" class="form-control mr-sm-2" v-model="user.password" :placeholder="langs.get('Password')" type="password" required="required" />
        </div>
        <div class="d-flex">
            <button type="button" class="btn btn-outline-success my-2 my-sm-0" @click="signIn">{{ langs.get('Sign In') }}</button>
            <b-dd-item>
            	<router-link to="/recovery" class="align-self-center ml-auto">{{ langs.get('Forgot password') }}</router-link>
            </b-dd-item>
        </div>
    </form>
</template>

<script>
	export default {
		name: 'FormSignIn',
		data () {
		    return {
				user: {},
				langs: langs
		    }
	  	},
		methods: {
			signIn() {
				if (validator.check(this)) {
					this.user.lang = langs.init();
					request.send('user/login', this.user, (data) => {
						if (data.token) {
							this.$cookie.set('token', data.token);
							langs.set(data.user.lang);
							alert.success(langs.get('You are in'));
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