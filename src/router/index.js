import Vue from 'vue';
import Router from 'vue-router';
import $store from '@/store/index.js';
import { Loading } from 'element-ui';

Vue.use(Router);

const router = new Router({
  routes: [{
    path: '/refresh',
    name: 'refresh',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'refresh' */ '@/views/refresh/index.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'login' */ '@/views/login/index.vue')
  }, {
    path: '/',
    name: 'container',
    redirect: '/module_A',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'container' */ '@/views/container/index.vue'),
    children: [{
      path: 'module_A',
      name: 'module_A',
      component: () => import(/* webpackChunkName: "module_A" */ '@/components/module/a/index.vue')
    }, {
      path: 'module_B_1',
      name: 'module_B_1',
      component: () => import(/* webpackChunkName: "module_B_1" */ '@/components/module/b/1/index.vue')
    }, {
      path: 'module_B_2',
      name: 'module_B_2',
      component: () => import(/* webpackChunkName: "module_B_2" */ '@/components/module/b/2/index.vue')
    }, {
      path: 'module_C',
      name: 'module_C',
      component: () => import(/* webpackChunkName: "module_C" */ '@/components/module/c/index.vue')
    }, {
      path: 'module_D',
      name: 'module_D',
      component: () => import(/* webpackChunkName: "module_D" */ '@/components/module/d/index.vue')
    }]
  }]
});

router.beforeEach((to, from, next) => {
  let loading = Loading.service({
    lock: true,
    background: 'rgba(0, 0, 0, 0.5)'
  });

  if (to.name!=='login' && from.name!=='login' && Object.keys($store.state.admin.limit).length===0 && Object.keys($store.state.usr.limit).length===0) {
    loading.close();
    return next({ name: 'login' });
  }
  if (to.name==='refresh' && from.name==='login' && (Object.keys($store.state.admin.limit).length!==0 || Object.keys($store.state.usr.limit).length!==0)) {
    loading.close();
    return next({ name: 'container' });
  }
  if (to.name==='login' && (Object.keys($store.state.admin.limit).length!==0 || Object.keys($store.state.usr.limit).length!==0)) {
    loading.close();
    return next({ name: 'container' });
  }
  if (to.matched.length === 0) {
    loading.close();
    return from.name ? next({
      name: from.name
    }) : next({ name: 'login' });
  }
  loading.close();
  next();
});

export default router;
