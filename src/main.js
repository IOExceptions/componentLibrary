import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.css'
// 导入组件库
import ElementUI from 'element-ui';
// 导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css';

// import $ from 'jquery';

// 配置 Vue 插件
Vue.use(ElementUI);
// Vue.prototype.$ = $;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


