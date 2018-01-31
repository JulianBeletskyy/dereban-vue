import Vue from 'vue';
import Router from 'vue-router';
import Main from '../Main.vue';
import Dashboard from '../Dashboard.vue';
import Result from '../Result.vue';

Vue.use(Router);

import router from '../router';
Vue.router = router;
window.router = router;

import VueCookie from 'vue-cookie';
Vue.use(VueCookie);
window.VueCookie = VueCookie;

export default new Router({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{
			type: 'scope',
			path: '/',
			name: VueCookie.get('token') ? 'Dashboard' : 'Main',
			component: VueCookie.get('token') ? Dashboard : Main
		},
		{
			path: '/',
			name: 'Main',
			component: Main
		},
		{
			path: '/results',
			name: 'Result',
			component: Result,
			props: true
		},
		{
			path: '/*',
			redirect: '/'
		}
	]
});