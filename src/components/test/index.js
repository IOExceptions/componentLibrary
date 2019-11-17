import Vue from 'vue'
import  test from './src/test'

//定义插件，可通过 Vue.use()方法注册组件,然后全局使用组件
// eslint-disable-next-line no-unused-vars
const install = function(Vue, opts = {}){
    //定义全局组件
    Vue.component(test.name,test)
}
export { test }
// 默认到处 install 方法
export default {
    install
}
Vue.use(install())

