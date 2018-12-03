import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    result: {},
    params: {}
  },
  getters: {
    resultChange: state => {
      return state
    }
  },
  mutations: {
    requst (state, obj) {
      state.result = obj.result
      state.params = obj.params
    }
  }
})

export default store
