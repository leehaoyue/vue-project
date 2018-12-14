import Vue from 'vue'
import store from '@/store/index'

export default {
  getRes (params) {
    Vue.axios({
      method: params.method,
      url: params.url,
      params: params.params
    }).then((res) => {
      store.commit('requst', res)
    })
  }
}