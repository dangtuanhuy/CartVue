// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './router/index'


 // eslint-disable-next-line

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.config.productionTip = false

