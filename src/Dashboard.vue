<template>
	<div class="dashboard-body">
		<div class="group-list border border-right">
			<GroupAdd :funcAddGroup="addGroup" />
			<div class="group-list-wrap invisible-scrollbar">
				<div class="group-cell p-3" v-for="group in groups" @click="setGroup(group.id)" :class="{'active': group.id == selectedGroup.id}">
					<span v-if="! group.edit">
						<span>{{ group.name }}</span>
						<span v-if="group.pivot.is_owner == 1" @click="removeGroup(group.id)"><i class="fas fa-trash float-right p-1 text-danger"></i></span>
						<span @click="editGroup(group)"><i class="fas fa-edit float-right p-1 text-success"></i></span>
					</span>

					<span v-if="group.edit">
						<div class="input-group input-group-sm">
							<input type="text" class="form-control" v-model="group.name" />
							<div class="input-group-btn">
								<button type="button" class="btn btn-outline-secondary btn-sm" @click="cancelGroup(group)">{{ langs.get('Cancel') }}</button>
								<button type="button" class="btn btn-outline-success btn-sm" @click="updateGroup(group)">{{ langs.get('Save') }}</button>
							</div>
						</div>
					</span>
					
				</div>
			</div>
		</div>
		<div class="user-list border border-right border-left-0">
			<div v-if="selectedGroup.id" class="user-list-wrap">
				<div class="p-3 border border-right-0 border-left-0 border-top-0 invite-btn-body">
					<div class="input-group text-center">
						<button type="button" class="btn btn-outline-success btn-block" @click="openInvite()" :class="{'disabled': ! selectedGroup.id}">{{ langs.get('Invite to group') }}</button>
					</div>
				</div>
				<div class="user-cell p-3" v-for="user in users" @click="chooseUser(user)" :class="{'choosed': isChoosed(user.id)}">
					<span>{{ user.name }}</span>
					<span v-if="! user.isOwner" @click="removeUser(user.id)"><i class="fas fa-trash float-right p-1 text-danger"></i></span>
					<span>{{ playersService.getPlayer(user.id) }}</span>
				</div>
			</div>
		</div>
		<div class="main-body bg-light p-3">
			<div ng-show="activeInvite">
				<div class="mb-3 bg-white rounded box-shadow p-3">
					<h6 class="mb-3">{{ langs.get('Invite New Users') }}</h6>
					<form name="form">
						<div class="card">
							<div class="card-body">
								<div class="form-group">
									<label>{{ langs.get('Email') }}</label>
									<input type="email" name="email" class="form-control" v-model="inviteUser.email" :placeholder="langs.get('Enter email')" required="required" />
								</div>
								<div class="form-group">
									<label>{{ langs.get('Name') }}</label>
									<input type="text" name="name" class="form-control" v-model="inviteUser.name" :placeholder="langs.get('Enter name')" required="required" />
								</div>
								<div class="form-group">
									<button type="button" class="btn btn-outline-success" @click="invite()">{{ langs.get('Invite') }}</button>
								</div>
							</div>
						</div>
					</form>
				</div>

				<div class="mb-3 bg-white rounded box-shadow p-3">
					<h6 class="border border-top-0 border-right-0 border-left-0 border-gray pb-2 mb-0">{{ langs.get('Choose from Invited') }}</h6>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import GroupAdd from './components/dashboard/GroupAdd.vue';
	export default {
		name: 'Dashboard',
		data () {
			return {
				langs: langs,
				group: {},
				groups: []
			}
		},
		methods: {
			addGroup (group) {
				console.log(group);
			},
			selectedGroup () {

			},
			inviteUser () {

			}
		},
		components: {
			GroupAdd
		}
	}
</script>