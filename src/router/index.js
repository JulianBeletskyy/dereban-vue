import Vue from 'vue';
import Router from 'vue-router';
import Main from '../Main.vue';
import Dashboard from '../Dashboard.vue';
import Result from '../Result.vue';

Vue.use(Router);

import router from '../router';
Vue.router = router;
window.router = router;

export default new Router({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{
			type: 'scope',
			path: '/',
			name: 'Dashboard',
			component: Dashboard,
			auth: true
		},
		{
			path: '/',
			name: 'Main',
			component: Main,
			auth: false
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

router.beforeEach((to, from, next) => {
	if (to.name == 'Dashboard') {
		next({name: 'Main'});
		next();
	}
	next();
})