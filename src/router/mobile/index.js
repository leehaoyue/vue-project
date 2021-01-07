import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '*',
    redirect: '/container'
  }, {
    path: '/container',
    name: 'container',
    component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "container" */ '@/views/mobile/container/index.vue')
  }]
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    return from.name ? next({
      name: from.name
    }) : next({ name: 'container' });
  }
  next();
});

export default router;
