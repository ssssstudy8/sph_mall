export default [{
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    component: () => import("@/views/Home"),
    meta: {
      isShow: true
    }
  },
  {
    path: "/login",
    component: () => import("@/views/Login"),
    meta: {
      isShow: true
    }
  },
  {
    path: "/register",
    component: () => import("@/views/Register"),
    meta: {
      isShow: false
    }
  },
  {
    path: "/trade",
    component: () => import("@/views/Trade"),
    meta: {
      isShow: true
    },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      if (from.path == '/shopcart') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: "/center",
    component: () => import("@/views/Center"),
    meta: {
      isShow: true
    },
    children: [{
        path: 'groupOrder',
        component: () => import("@/views/Center/GroupOrder")
      },
      {
        path: 'MyOrder',
        component: () => import("@/views/Center/MyOrder")
      },
      {
        path: '/center',
        redirect: '/center/myOrder'
      }
    ]
  },
  {
    path: "/pay",
    component: () => import("@/views/Pay"),
    meta: {
      isShow: true
    },
    beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: "/paySuccess",
    component: () => import("@/views/PaySuccess"),
    meta: {
      isShow: true
    }
  },
  {
    path: "/search/:keyword?",
    component: () => import("@/views/Search"),
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
    path: "/detail/:skuid",
    component: () => import("@/views/Detail"),
    meta: {
      isShow: true
    }
  },
  {
    path: "/addcartsuccess",
    component: () => import("@/views/Addcartsuccess"),
    name: 'addcartsuccess',
    meta: {
      isShow: true
    }
  },
  {
    path: "/shopcart",
    component: () => import("@/views/Shopcart"),
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
