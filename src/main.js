import Vue from 'vue'
import App from './App'
import router from './router'
import TypeNav from '@/components/TypeNav'
import Pagination from './components/Pagination'
import store from './store'
import '@/mock/mockServe'
import Carousel from '@/components/Carousel'
import iconfont from './assets/icon/iconfont.css'


//注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name,Pagination)

//引入swiper样式
import "swiper/css/swiper.css"

import {
  reqGetSearchInfo
} from './api/index.js'
console.log(reqGetSearchInfo({}))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el: '#app',
  router,
  store
})
