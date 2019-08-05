import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import A from './views/C.vue';
// import B from './views/D.vue';

export default new Router({
  mode: 'history',
  base: '/monitor',
  routes: [
    {
      path: '/a',
      name: 'a',
      component: () => import('./views/A.vue')
      // component: A
    },
    {
      path: '/b',
      name: 'b',
      component: () => import('./views/B.vue')
      // component: B
    }
  ]
})
