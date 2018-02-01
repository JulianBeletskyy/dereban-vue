<template>
    <header class="header fixed-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Dereban</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-2">
                            <select class="form-control">
                                <option value="en">EN</option>
                                <option value="uk">UK</option>
                            </select>
                        </li>

                        <li class="nav-item">
                            <button v-if="logged" @click="logOut" class="btn btn-outline-success my-2 my-sm-0">Log Out</button>
                            <b-dropdown v-if="! logged" id="ddown-right" right text="Sign In" variant="btn btn-outline-success">
                                <FormSignIn/>
                            </b-dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import FormSignIn from './FormSignIn.vue';

    export default {
        name: 'Header',
        data () {
            return {
                logged: false
            }
        },
        created () {
            this.logged = VueCookie.get('token');
        },
        methods: {
            logOut () {
                VueCookie.delete('token');
                alert.success('You are out', 'center');
                setTimeout(() => {
                    location.href = '/';
                }, 1200);
            }
        },
        components: {
            FormSignIn
        }
    }
</script>

<style>

</style>