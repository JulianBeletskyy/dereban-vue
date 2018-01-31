import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Dashboard from './Dashboard.vue'

Vue.use(BootstrapVue)

import router from './router';
Vue.router = router;
window.router = router;

router.beforeEach((to, from, next) => {
	var temp = '123';
	if (to.path == '/' && temp == '123') {
		next({ path: '/', name: 'Dashboard', component: Dashboard});
	}
	next();
});

import VueAuth from '@websanova/vue-auth';
import axios from 'axios';
import VueAxios from 'vue-axios';
 
Vue.use(VueAxios, axios);
window.axios = axios;

Vue.use(VueAuth, {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});

import request from './services/request.js';
Vue.use(request);
window.request = request;

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
