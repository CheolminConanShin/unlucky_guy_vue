import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  title: "default",
  data: {}
}

const mutations = {
  [types.setTitle](state, title) {
    state.title = title
  },
  [types.setData](state, data) {
    state.data = data
  }
}

const options = {
  state,
  mutations,
  actions,
  getters
}


export default new Vuex.Store(options)
export {options}

