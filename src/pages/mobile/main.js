import Vue from 'vue';
import mobile from './App.vue';
// 路由管理器
import router from '../../router/mobile/index.js';
// vuex-状态管理
import store from '../../store/index.js';

// promise兼容性处理（ie、火狐）
import promise from 'es6-promise';
// lodash-实用工具库
import lodash from 'lodash';
// axios-HTTP库
import axios from '@/axios/index';
// Vant-UI组件库
import Vant from 'vant';
import 'vant/lib/index.css';
// Element部分组件
import { Backtop, Icon } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// font-awesome-矢量图标
import 'font-awesome/css/font-awesome.css';
// 全局变量
import '@/global/globalData';
// 全局方法
import globalmethod from '@/global/globalMethod';
// 全局组件
import components from '@/global/globalComponents/mobile.js';

// Mockjs
const Mock = require('mockjs');

Vue.use(Vant);
Vue.use(Backtop);
Vue.use(Icon);
Vue.use(components);

Vue.prototype.$lodash = lodash;
Vue.prototype.$axios = axios;
Vue.prototype.$globalmethod = globalmethod;
Vue.prototype.$mock = Mock;

promise.polyfill();

// 取消vue所有的日志与警告
Vue.config.silent = true;
// 阻止vue在启动时生成生产提示
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(mobile),
  created() {
    this.terminalChange();
    window.addEventListener('resize', this.terminalChange, 20);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.terminalChange, 20);
  },
  methods: {
    terminalChange() {
      let iSAndroid = this.$globalmethod.iSAndroid();

      switch (iSAndroid) {
      case 'pc':
        window.location = window.location.origin+'/pc.html#/';
        break;
      default:
        window.location = window.location.origin+'/mobile.html#/';
        break;
      }
    }
  }
}).$mount('#mobile');
