<template>
  <div id="app">
  	<Header/>

    <router-view></router-view>

    <Footer/>
  </div>
</template>

<script>
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';

	

	export default {
	  name: 'app',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components: {
	  	Header,
	  	Footer
	  }
	}
</script>

<style lang="css">
	@import './assets/css/style.css';
</style>
