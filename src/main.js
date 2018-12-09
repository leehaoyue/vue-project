// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 全局变量
import '@/global/index'
// vuex（状态管理）
import store from '@/store/index'
// es6-promise（promise兼容ie）
import promise from 'es6-promise'
// axios（请求）
import '@/axios/index'
// socket.io（即时通信）
import '@/socket.io/index'
import sockets from '@/socket.io/connect.js'

promise.polyfill()

// 取消vue所有的日志与警告
Vue.config.silent = true
// 阻止vue在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  sockets,
  components: { App },
  template: '<App/>'
})
