import Vue from 'vue'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'
import service from './service.js'

Vue.prototype.Qs = Qs
Vue.prototype.$service = service

let loadingInstance = null

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
  baseURL: process.env.API,
  responseType: 'json',
  timeout: 3000,
  cancelToken: axios.CancelToken.source().token, // 取消请求（防止一个接口请求多次）
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 自定义拦截器
axiosInstance.interceptors.request.use(res => {
  return res
}, () => {
  // 请求失败
  loadingInstance.close()
  Message({
    message: '请求出错了，请重试！',
    type: 'error'
  })
})

axiosInstance.interceptors.response.use(res => {
  // 响应成功
  loadingInstance.close()
  return res
}, () => {
  // 响应失败
  loadingInstance.close()
  Message({
    message: '请求出错了哦，请重试！',
    type: 'error'
  })
})

Vue.use(VueAxios, axiosInstance)
