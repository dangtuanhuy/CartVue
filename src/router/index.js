
import Home from '../components/Home.vue';
import Portfolio from '../components/portfolio/Portforlio.vue';
import Stocks from '../components/stocks/Stocks.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    component: Stocks
  },
  { path: '/redirect-me', redirect: { name: 'Home' } },
];
