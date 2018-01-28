import Home from './../views/home/Home.vue';
import Invest from './../views/invest/Invest.vue';

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/invest',
    component: Invest
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  }
];