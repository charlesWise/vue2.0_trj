import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';

//引入全局的base文件
require('./assets/styles/reset.css');

Vue.use(VueRouter);

const router=new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});

new Vue({
  el: '#app',
  router,
  render: creat => creat(App)
})
