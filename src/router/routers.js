import Home from '@/views/home'
import Login from '@/views/login'
import Register from '@/views/register'
import Search from '@/views/search'
import Detail from '@/views/detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/shopcart'

export default [{
    path: "/home",
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isShow: true
    }
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isShow: false
    }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    name: 'search',
    meta: {
      isShow: true
    },
    props: (route) => ({
      keyword: route.params.keyword,
      big: route.query.big
    })
  },
  {
    path: '*',
    redirect: '/home',
    meta: {
      isShow: true
    }
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: {
      isShow: true
    }
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    name:'addcartsuccess',
    meta: {
      isShow: true
    }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: {
      isShow: true
    }
  }
]
 //组件能不能传递props数据
    //希尔值写法：params
    //props:true
    //对象写法：额外的给路由组件传递一些props
    //props:{a:1111111,b:2222222}
    //函数写法：可以给params参数，query参数，通过props传递给路由组件
    /*  props:($route)=>{
       return {
         keyword:$route.params.keyword,
         k:$route.query.k
       }
     } */
