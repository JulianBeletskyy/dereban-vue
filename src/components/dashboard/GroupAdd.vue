<template>
	<div class="p-3 border border-right-0 border-left-0 border-top-0">
		<div class="input-group">
			<input type="text" v-model="group.name" class="form-control" :placeholder="langs.get('Add group')" />
			<span class="input-group-append">
				<button type="button" class="btn btn-outline-secondary" @click="addGroup">
					<i class="fas fa-plus"></i>
				</button>
			</span>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'GroupAdd',
		data () {
			return {
				langs: langs,
				group: {}
			}
		},
		props: ['funcAddGroup'],
		methods: {
			addGroup () {
				this.funcAddGroup(this.group);
				this.group = {};
			}
		},
		components: {
			
		}
	}
</script>

<style lang="css">
	
</style>