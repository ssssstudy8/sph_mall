import Vue from 'vue'
import App from './App'
import router from './router'
import TypeNav from '@/components/TypeNav'
import store from './store'
import '@/mock/mockServe'
import Carousel from '@/components/Carousel'

//注册全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)

//引入swiper样式
import "swiper/css/swiper.css"

import {reqGetCategoryList} from './api/index.js'
reqGetCategoryList();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store
})
