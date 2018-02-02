<template>
    <header class="header fixed-top">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <div class="container-fluid">
                <b-navbar-brand>
                    <router-link to="/" class="align-self-center ml-auto">Dereban</router-link>
                </b-navbar-brand>
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-collapse is-nav id="nav_collapse">
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
                </b-collapse>
            </div>
        </b-navbar>
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
                alert.success('You are out');
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

<style scoped>
    .navbar-brand a {
        color: #fff;
        text-decoration: none;
    }
</style>