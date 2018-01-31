<template>
	<div class="container demo-body text-center">
		<div class="row justify-content-center">
			<div class="col-sm-5 align-self-center">
		    	<div class="card">
		    		<div class="card-header">
		    			Results
		    		</div>
					<div v-if="results" class="card-body results">
						<ul class="list-group mb-3" v-for="(item, i) in results.list">
							<span v-if="results.type == 'teams'">Team {{i + 1}}</span>
							<li v-if="results.type == 'leader'" class="list-group-item">{{ item.name }}</li>
		      				<li v-if="results.type == 'teams'" v-for="key in item" class="list-group-item">{{ key.name }}</li>
						</ul>
					</div>
		    	</div>
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Result',
		data () {
			return {
                
			}
		},
		created() {
			if ( ! this.results) {
				router.push('/');
			}
		},
		props: ['results'],
		components: {
			
		}
	}
</script>