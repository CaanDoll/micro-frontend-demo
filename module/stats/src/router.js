import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import A from './views/C.vue';
// import B from './views/D.vue';

export default new Router({
  mode: 'history',
  base: '/stats',
  routes: [
    {
      path: '/c',
      name: 'c',
      component: () => import('./views/C.vue')
      // component: A
    },
    {
      path: '/d',
      name: 'd',
      component: () => import('./views/D.vue')
      // component: B
    }
  ]
})
