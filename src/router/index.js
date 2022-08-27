import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import routes from './routers'
import store from '@/store'

Vue.use(Router)

//需要重写VueRouter.prototype原型对象身上的push|replace方法
//先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function (location, resolve, reject) {
  //第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产地第二个参数|第三个参数
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
let router = new VueRouter({
  routes,
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    //返回的这个y=0，代表的滚动条在最上方
    return {
      y: 0
    }
  }
})

//全局守卫
router.beforeEach(async (to, from, next) => {
  //to:可以获取到你要跳转到那个路由信息
  //from:可以获取到你从哪个路由而来的信息
  //next: 放行函数  next()放行  next(path)放行到指定路径    next(false)
  // next()
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if (token) {
    if (to.path == '/login') {
      next('/')
    } else {
      //登录了 去的不是登录
      //如果用户名已经拥有
      if (name) {
        next()
      } else {
        //没有用户信息，派发action让仓库存储用户信息
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          //token失效
          await store.dispatch('Logout')
          next('/login')
        }
      }
    }
  } else {
    //未登录:不能去交易相关，不能去支付相关，不能去个人中心
     let toPath = to.path
     if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
       next('/login?redirect=' + toPath)
     } else {
       //去的不是这些路由--放行
       next()
     }
  }
})


export default router
