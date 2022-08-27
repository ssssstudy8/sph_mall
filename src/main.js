import Vue from 'vue'
import App from './App'
import router from './router'
import TypeNav from '@/components/TypeNav'
import Pagination from './components/Pagination'
import store from './store'
import '@/mock/mockServe'
import Carousel from '@/components/Carousel'
import "swiper/css/swiper.css"
import * as API from '@/api';
import VueLazyload from 'vue-lazyload'
import good from '@/assets/img/good.jpg'
import element from '@/utils/element'
Vue.use(element)
// Vue.use(element)
Vue.use(VueLazyload,{
  //懒加载的图片
  loading:good
})


//注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  el: '#app',
  router,
  store
})
