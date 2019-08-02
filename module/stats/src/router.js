import Vue from 'vue'
import Router from 'vue-router'
import A from './views/A';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/stats',
  routes: [
    {
      path: '/a',
      name: 'a',
      component: A
    },
    {
      path: '/b',
      name: 'b',
      component: () => import('./views/B.vue')
    }
  ]
})
