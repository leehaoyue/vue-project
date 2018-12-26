// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// font-awesome（字体图标库）
import 'font-awesome/css/font-awesome.css'
// 全局变量
import '@/global/globalData.js'
// 全局组件
import components from '@/global/globalComponents.js'
// vuex（状态管理）
import store from '@/store/index'
// es6-promise（promise兼容ie）
import promise from 'es6-promise'
// axios（请求）
import '@/axios/index'
// socket.io（即时通信）
import '@/socket.io/index'
import sockets from '@/socket.io/connect.js'
// Echarts（数据可视化）
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// promise兼容性处理（ie、火狐）
promise.polyfill()
// ElementUI（完整引入）
Vue.use(ElementUI)
// 全局组件（引入）
Vue.use(components)

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
