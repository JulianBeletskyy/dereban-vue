<template>
    <div class="form-group">
        <div class="list-group" @click="choosePlayer(player)">
            <div class="list-group-item" :class="{'list-group-item-success': player.play, 'list-group-item-action': ! player.play}">
                <span>{{ player.name }}</span>
                <i class="fas fa-trash float-right text-danger" @click="removePlayer(player.id)"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import storage from '../../services/localstorage.js';
    import playList from '../../services/playlist.js';

    export default {
        name: 'PlayerCell',
        data() {
            return {

            }
        },
        props: ['player', 'funcRemove'],
        methods: {
            choosePlayer(player) {
                player.play = ! player.play;
                player.play ? playList.add(player) : playList.remove(player.id);
                //this.$toastr.success('Message', 'Title');
            },
            removePlayer(id) {
                this.funcRemove(id);
            }
        }
    }
</script>

<style scoped>
    .list-group:hover {
        cursor: pointer;
    }
</style>