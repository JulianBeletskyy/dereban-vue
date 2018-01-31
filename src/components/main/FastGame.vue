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
                            <select class="form-control" v-model="countInTeam">
                                <option v-for="(i, num) in getArray()" :value="num + 1">{{ num + 1 }}</option>
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
                            <button type="button" class="btn btn-outline-success" @click="dereban()">Dereban</button>
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
    import Result from '../../Result.vue';
    import storage from '../../services/localstorage.js';
    import playList from '../../services/playlist.js';

    export default {
        name: 'FastGame',
        data() {
            return {
                tab: 'teams',
                players: [],
                countInTeam: 1
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
            PlayerAdd,
            Result
        },
        methods: {
            getArray() {
                return new Array(this.players.length);
            },
            getPlayers() {
                this.players = storage.get();
            },
            addPlayer(name) {
                storage.save({'name':name, 'play': false});
                this.getPlayers();
            },
            removePlayer(id) {
                storage.remove(id);
                this.getPlayers();
            },
            dereban() {
                var playList = [];
                for (var k in this.players) {
                    if (this.players[k].play) {
                        playList.push(this.players[k]);
                    }
                }

                var countTeams = Math.floor(playList.length / this.countInTeam);
                var len = playList.length;

                for (let i = playList.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [playList[i], playList[j]] = [playList[j], playList[i]];
                }
                var results = {
                    'list': [],
                    'type': this.tab
                };

                if (this.tab == 'teams') {
                    for (var i = 0; i < countTeams; i++) {
                        results.list[i] = [];
                        for (var j = 0; j < this.countInTeam; j++) {
                            if (playList.length > 0) {
                                results.list[i].push(playList.splice(Math.random() * len--,1)[0]);
                            }
                        }
                    }
                } else {
                    for (var i = this.countInTeam; i > 0; i--) {
                        results.list.push(playList.splice(Math.random() * len--, 1)[0]);
                    }
                }
                router.push({name: 'Result', params: {results: results}});
            }
        }
    }
</script>

<style>

</style>