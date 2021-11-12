import Vue from 'vue'
import App from './App.vue'
// 引入全局样式
import "./assets/css/common.css";
// 引入路由
import router from './router'
// 引入自定义echarts图表
import Echarts from './plugins/echarts'
Vue.use(Echarts)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
