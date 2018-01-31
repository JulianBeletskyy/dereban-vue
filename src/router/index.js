import Vue from 'vue';
import Router from 'vue-router';
import Main from '../Main.vue';
import Dashboard from '../Dashboard.vue';
import Result from '../Result.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{
			path: '/',
			//name: 'Main',
			//component: Main
		},
		{
			path: '/dashboard',
			//name: 'Dashboard',
			//component: Dashboard
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