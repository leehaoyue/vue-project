import Vue from 'vue'
// import store from '@/store/index'

export default {
  getModel (url, method, params) {
    return new Promise((resolve, reject) => {
      Vue.axios({
        method: method,
        url: url,
        params: params
      }).then(res => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}