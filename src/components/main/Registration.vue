<template>
    <div class="card">
        <div class="card-header text-center">
            Registration
        </div>
        <div class="card-body">
            <form name="form" novalidate="novalidate">
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label">Email:</label>
                    <div class="col-sm-9">
                        <div class="input-group">
                            <input type="email" v-validate="'required|email'" class="form-control" v-model="user.email" placeholder="email@example.com" required="required" />
                            <span class="input-group-append">
                                <span class="far fa-envelope input-group-text" area-hidden="true"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Password:</label>
                    <div class="col-sm-9">
                        <div class="input-group">
                            <input type="password" v-validate="'required|min:6'" class="form-control" v-model="user.password" placeholder="Password" required="required" />
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <span class="fas fa-unlock"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form> 
            <button class="btn btn-outline-success" @click="signUp">Sign Up</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        data () {
            return {
                user: {}
            }
        },
        methods: {
            signUp () {
                console.log(this.user);
            }
        },
        components: {
            
        }
    }
</script>

<style>

</style>