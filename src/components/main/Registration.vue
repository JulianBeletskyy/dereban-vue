<template>
    <div class="card">
        <div class="card-header text-center">
            {{ langs.get('Registration') }}
        </div>
        <div class="card-body">
            <form name="form" novalidate="novalidate">
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">{{ langs.get('Email') }}:</label>
                    <div class="col-sm-9">
                        <div class="input-group">
                            <input name="email" type="email" v-validate="'required:true|email'" class="form-control" v-model="user.email" placeholder="email@example.com" required="required" />
                            <span class="input-group-append">
                                <span class="far fa-envelope input-group-text" area-hidden="true"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">{{ langs.get('Password') }}:</label>
                    <div class="col-sm-9">
                        <div class="input-group">
                            <input name="password" type="password" v-validate="'required:true|min:6'" class="form-control" v-model="user.password" :placeholder="langs.get('Password')" required="required" />
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <span class="fas fa-unlock"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form> 
            <button class="btn btn-outline-success" @click="signUp">{{ langs.get('Sign Up') }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        data () {
            return {
                user: {},
                langs: langs
            }
        },
        methods: {
            signUp () {
                if (validator.check(this)) {
                    this.user.url = location.href + 'activate/{hash}';
                    request.send('user/registerActivate', this.user, (data) => {
                    
                    }, 'post');
                }
            }
        }
    }
</script>