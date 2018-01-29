import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

export default new Vuex.Store({
	actions,
	modules: {
		cart,
		products
	}
})