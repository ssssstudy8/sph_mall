import Vue from 'vue'
import App from './App'
import router from './router'
import TypeNav from '@/components/TypeNav'
import store from './store'

//注册全局组件
Vue.component(TypeNav.name,TypeNav)

import {reqCategoryList} from './api/index.js'
reqCategoryList();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store
})
