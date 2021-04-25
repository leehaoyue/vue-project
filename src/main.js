// 解决ie白屏
import 'babel-polyfill';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// promise兼容性处理（ie、火狐）
import promise from 'es6-promise';
// axios-HTTP库
import $axios from '@/axios/index.js';
// Element-桌面端组件库
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// form-create-动态表单
// import formCreate from '@form-create/element-ui';
// font-awesome-矢量图标
import '@fortawesome/fontawesome-free/css/all.css';
// Swiper-轮播
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.less';
import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.less';
import 'swiper/components/scrollbar/scrollbar.less';
// 全局方法
import $globalmethod from '@/global/globalMethod';
// 全局组件
import $components from '@/global/globalComponents';
// 全局变量
import $globaldata from '@/global/globalData';
// 自定义指令
import './directive/index.js';

promise.polyfill();
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const app = createApp(App),
  // Lodash
  $lodash = require('lodash'),
  // Mockjs
  $mock = require('mockjs');

app.use(store)
  .use(router)
  .use(ElementPlus)
  // .use(formCreate)
  .use($components)
  .component('swiper', Swiper)
  .component('swiper-slide', SwiperSlide)
  .mount('#app');

app.config.globalProperties.$axios = $axios;
app.config.globalProperties.$lodash = $lodash;
app.config.globalProperties.$mock = $mock;
app.config.globalProperties.$globalmethod = $globalmethod;
app.config.globalProperties.$globaldata = $globaldata;