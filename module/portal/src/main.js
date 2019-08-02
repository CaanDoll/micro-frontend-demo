import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app',
    render: (h) => h(App),
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

if(process.env.NODE_ENV === 'production') {
  require('./set-public-path');
}else{
  mount({});
}