import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '@/views/home'
import Login from '@/views/login'
import Register from '@/views/register'
import Search from '@/views/search'

export default new Router({
  routes: [{
      path: "/home",
      component: Home,
      meta: {
        show: true
      }
    },
    {
      path: "/login",
      component: Login,
      meta: {
        show: true
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        show: false
      }
    },
    {
      path: "/search/:useName?",
      component: Search,
      name: 'search',
      meta: {
        show: false
      },

      //组件能不能传递props数据
      //希尔值写法：params
      //props:true
      //对象写法：额外的给路由组件传递一些props
      props:{a:1111111,b:2222222}
      //函数写法：可以给params参数，query参数，通过props传递给路由组件
     /*  props:($route)=>{
        return {
          keyword:$route.params.keyword,
          k:$route.query.k
        }
      } */
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
