import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'

Vue.prototype.Qs = Qs

const axiosInstance = axios.create({
  transformRequest: [data => { // 请求数据处理（防止后端接收不到参数）
    return Qs.stringify(data)
  }],
  transformResponse: [data => { // ie兼容性（解决无返回数据问题）
    if (!!window.ActiveXObject || 'ActiveXObject' in window || navigator.userAgent.indexOf('MSIE') >= 0) {
      return JSON.parse(data)
    }
    return data
  }],
  responseType: 'json',
  timeout: 3000,
  cancelToken: axios.CancelToken.source().token, // 取消请求（防止一个接口请求多次）
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 自定义拦截器
axiosInstance.interceptors.request.use(res => {
  // 请求成功
  return res
}, () => {
  // 请求失败
})

axiosInstance.interceptors.response.use(res => {
  // 响应成功
  return res
}, () => {
  // 响应失败
})

Vue.use(VueAxios, axiosInstance)
