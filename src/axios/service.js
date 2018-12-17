import Vue from 'vue'
import store from '@/store/index'

export default {
  getRes (params) {
    return new Promise((resolve, reject) => {
      Vue.axios({
        method: params.method,
        url: params.url,
        params: params.params
      }).then((res) => {
        resolve(res);
        store.commit('requst', res)
      }).catch((err) => {
        reject(err);
      })
    });
  }
}