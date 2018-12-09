import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    result: {},
    params: {},
    msgQue: {}
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
    },
    socketQue (state, obj) {
      state.msgQue = obj
    }
  }
})

export default store
