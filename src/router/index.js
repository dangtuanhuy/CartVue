
import Home from '../components/Home.vue';
import Portfolio from '../components/portfolio/Portforlio.vue';
import Stock from '../components/stocks/Stock.vue'
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
    component: Stock
  },
  { path: '/redirect-me', redirect: { name: 'Home' } },
];
