import { createRouter, createWebHashHistory } from 'vue-router';
import $store from '@/store/index.js';
import { ElLoading } from 'element-plus';

const routes = [
    {
      path: '/refresh',
      name: 'refresh',
      component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'refresh' */ '@/views/refresh/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'login' */ '@/views/login/index.vue')
    },
    {
      path: '/',
      name: 'container',
      redirect: '/chart3D',
      component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'container' */ '@/views/container/index.vue'),
      children: [{
        path: 'chart3D',
        name: 'chart3D',
        component: () => import(/* webpackChunkName: "chart3D" */ '@/components/module/chart3D/index.vue')
      }]
    }
  ],
  router = createRouter({
    history: createWebHashHistory(),
    routes
  });

router.beforeEach((to, from, next) => {
  let loading = ElLoading.service({
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
