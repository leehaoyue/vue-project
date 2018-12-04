import Vue from 'vue'
import store from '@/store/index'

export default {
  getRes (params) {
    Vue.axios({
      method: 'get',
      url: '',
      params: params
    }).then((res) => {
      store.commit('requst', res)
    })
  }
}