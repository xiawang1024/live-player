import Vue from 'vue';
import App from './App.vue';
/**
 * 微信相关：sdk配置
 */
import 'weChat/index';

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
