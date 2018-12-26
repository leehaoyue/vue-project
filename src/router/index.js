import Vue from 'vue'
import Router from 'vue-router'

const container = () => import('@/page/container/index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: 'container'
    }, {
      path: '*',
      name: 'container',
      component: container
    }
  ]
})
