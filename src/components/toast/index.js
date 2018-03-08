import ToastComponent from './Toast.vue';
var Toast = {
  install(Vue) {
    Vue.prototype.$toast = (tips) => {
	let ToastComp = Vue.extend(ToastComponent),
		toastData = { //1、此对象data与Toast.vue中的data对象数据同步
		data() {
		  return {
		    tips
		  }
		}
		},
      	tpl = new ToastComp(toastData).$mount().$el; // 2、创建实例，$el获得dom对象
	document.body.appendChild(tpl); // 3、把创建的实例添加到body中
    }
  }
};

export default Toast;