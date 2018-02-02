<template>
    <div class="input-group">
        <input type="text" name="userName" class="form-control" v-model="playerName" :placeholder="langs.get('Enter Name')" required="required">
        <span class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="addPlayer()">
                <i class="fas fa-user-plus fa-md" aria-hidden="true"></i>
            </button>
        </span>
    </div>
</template>

<script>
    import storage from '../../services/localstorage.js';
    export default {
        name: 'PlayerCell',
        data () {
            return {
               playerName: '',
               langs: langs
            }
        },
        props: ['funcAdd'],
        methods: {
            addPlayer () {
                this.funcAdd(this.playerName);
                this.playerName = '';
            }
        }
    }
</script>

<style>

</style>