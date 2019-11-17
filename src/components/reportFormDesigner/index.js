import Vue from 'vue'
import  reportFormDesigner from './src/reportFormDesigner'
import  leftPlan from './src/leftPlan'
import  rightPlan from './src/rightPlan'
import  formMain from './src/formMain'
import  planAttribute from './src/page/planAttribute'

//定义插件，可通过 Vue.use()方法注册组件,然后全局使用组件
// eslint-disable-next-line no-unused-vars
const install = function(Vue, opts = {}){
    //定义全局组件
    Vue.component(reportFormDesigner.name,reportFormDesigner)
    Vue.component(leftPlan.name,leftPlan)
    Vue.component(rightPlan.name,rightPlan)
    Vue.component(formMain.name,formMain)
    Vue.component(planAttribute.name,planAttribute)
}
export { reportFormDesigner,leftPlan,rightPlan,formMain,planAttribute }
// 默认到处 install 方法
export default {
    install
}
Vue.use(install())

