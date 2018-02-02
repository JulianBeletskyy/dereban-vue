<template>
    <footer class="fixed-bottom bg-dark text-white container-fluid">
		<div class="p-3">
			<span>{{ langs.get('Copyrights') }} {{ now.getFullYear() }}</span>
			<span class="float-right">Dereban</span>
		</div>
	</footer>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
            return {
                langs: langs,
                now: new Date() 
            }
        }
    }
</script>

<style>

</style>