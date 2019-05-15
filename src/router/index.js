// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Home from '../components/Home.vue';
import Portfolio from '../components/portfolio/Portforlio.vue';
import Stocks from '../components/stocks/Stocks.vue'
export const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks }
];
