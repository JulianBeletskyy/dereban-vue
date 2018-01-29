<template>
	<div class="container demo-body">
    	<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-6">
				<FastGame/>
			</div>
			<div class="col-sm-12 col-md-12 col-lg-6">
				<Registration/>
			</div>
		</div>
	</div>
</template>

<script>
	import FastGame from './components/main/FastGame.vue';
	import Registration from './components/main/Registration.vue';

	export default {
		name: 'Main',
		data () {
			return {
                
			}
		},
		components: {
			FastGame,
			Registration
		}
	}
</script>