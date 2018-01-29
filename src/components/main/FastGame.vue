<template>
    <div class="card">
        <div class="card-header text-center">
            Fast Game
        </div>
        <div class="card-body">
            <ul class="nav nav-tabs nav-justified mb-3" role="tablist">
                <li class="nav-item">
                    <a class="nav-link" :class="{'active': tab == 'teams'}" href="javascript:;" aria-selected="true" @click="tab = 'teams'">Teams</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{'active': tab == 'leader'}" href="javascript:;" role="tab" aria-selected="true" @click="tab = 'leader'">Leaders</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="row">
                    <div class="col-sm-12 col-md-8">
                        <div class="form-group">
                            <label>Add player:</label>
                            <label class="float-right">Choosed players: {{ count }}</label>
                            <PlayerAdd :funcAdd="addPlayer"/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="form-group">
                            <label v-if="tab == 'teams'">Count in team</label>
                            <label v-else>Number of Leaders</label>
                            <select class="form-control">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="list-body">
                            <PlayerCell v-for="player in players" :player="player" :funcRemove="removePlayer"/>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center">
                        <div class="form-group">
                            <button type="button" class="btn btn-outline-success">Dereban</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PlayerCell from './PlayerCell.vue';
    import PlayerAdd from './PlayerAdd.vue';
    import storage from '../../services/localstorage.js';
    import playList from '../../services/playlist.js';
    //import langs from '../../services/langs.js';
    import { mapGetters } from 'vuex';

    export default {
        name: 'FastGame',
        data() {
            return {
                tab: 'teams',
                players: []
            }
        },
        computed: {
            count() {
                var count = 0;
                for (var k in this.players) {
                    if (this.players[k].play) {
                        count++;
                    }
                }
                return count;
            }
        },
        created() {
            this.getPlayers();
        },
        components: {
            PlayerCell,
            PlayerAdd
            //langs
        },
        methods: {
            getPlayers() {
                this.players = storage.get()
            },
            addPlayer(name) {
                storage.save({'name':name, 'play': false});
                this.getPlayers();
            },
            removePlayer(id) {
                storage.remove(id);
                this.getPlayers();
            }
        }
    }
</script>

<style>

</style>