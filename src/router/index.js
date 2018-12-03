import Vue from 'vue'
import Router from 'vue-router'

const helloworld = () => import('@/components/helloworld/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'helloworld'
    },
    {
      path: '*',
      name: 'helloworld',
      component: helloworld
    }
  ]
})
