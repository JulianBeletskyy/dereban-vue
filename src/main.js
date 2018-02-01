import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);

import { default as swal } from 'sweetalert2'
window.swal = swal;

/*import VueCookie from 'vue-cookie';
Vue.use(VueCookie);
window.VueCookie = VueCookie;*/

import router from './router';
Vue.router = router;
window.router = router;

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import VueAuth from '@websanova/vue-auth';
Vue.use(VueAuth, {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});

window.axios = axios;

import request from './services/request.js';
Vue.use(request);
window.request = request;

import alert from './services/alert.js';
Vue.use(alert);
window.alert = alert;

import langs from './services/langs.js';
Vue.use(langs);
window.langs = langs;

import Vuex from 'vuex';

Vue.use(Vuex);

const app = new Vue({
	el: '#app',
	router,
	template: '<App/>',
    components: { App },
})

router.beforeEach((to, from, next) => {
	console.log(to);
	console.log(from);
	next();
});
