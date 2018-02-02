import Vue from 'vue';
import Router from 'vue-router';
import Main from '../Main.vue';
import Dashboard from '../Dashboard.vue';
import Result from '../Result.vue';
import Recovery from '../Recovery.vue';
import Activate from '../Activate.vue';
import ChangePass from '../ChangePass.vue';

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
			path: '/',
			name: VueCookie.get('token') ? 'Dashboard' : 'Main',
			component: VueCookie.get('token') ? Dashboard : Main
		},
		{
			path: '/recovery',
			name: 'Recovery',
			component: Recovery
		},
		{
			path: '/recovery/:hash',
			name: 'ChangePass',
			component: ChangePass,
			props: true
		},
		{
			path: '/results',
			name: 'Result',
			component: Result,
			props: true
		},
		{
			path: '/activate/:hash',
			name: 'Activate',
			component: Activate,
			props: true
		},
		{
			path: '/*',
			redirect: '/'
		}
	]
});