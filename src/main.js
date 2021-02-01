import Vue from 'vue';
import App from './App.vue';
// 路由管理器
import router from './router/index.js';
// vuex-状态管理
import store from './store/index.js';

// promise兼容性处理（ie、火狐）
import promise from 'es6-promise';
// axios-HTTP库
import axios from '@/axios/index.js';
// ECharts-数据可视化
import * as echarts from 'echarts';
// Element-桌面端组件库
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
// form-create-表单生成器
import formCreate, { maker } from '@form-create/element-ui';
// font-awesome-矢量图标
import 'font-awesome/css/font-awesome.css';
// Lodash
import lodash from 'lodash';
// 全局变量
import '@/global/globalData';
// 全局方法
import globalmethod from '@/global/globalMethod';
// 全局组件
import components from '@/global/globalComponents';
// Mockjs
const Mock = require('mockjs');

Vue.use(Element);
Vue.use(formCreate);
Vue.use(maker);
Vue.use(components);

promise.polyfill();

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$globalmethod = globalmethod;
Vue.prototype.$lodash = lodash;
Vue.prototype.$mock = Mock;

// 取消vue所有的日志与警告
Vue.config.silent = true;
// 阻止vue在启动时生成生产提示
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      loading: this.$loading({
        lock: true,
        text: '加载中。。。',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
      })
    };
  },
  mounted() {
    this.loading.close();
  }
}).$mount('#app');
