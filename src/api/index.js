//统一管理项目接口
//引入二次封装的axios(带有请求、响应的拦截器)
import requests from './ajax'
import mockRequests from './mockAjax'

//三级菜单的请求地址：/api/product/getBaseCategoryList GET请求 没有任何参数
export const reqGetCategoryList = () => requests(`/product/getBaseCategoryList`)

//获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')


//获取搜索模块的数据地址:/api/list 请求方式：post  参数:需要参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口，给服务器传递参数params,至少是一个对象
export const reqGetSearchInfo = (params) => requests({url: "/list", method: "post", data: params})

//获取产品详情信息的接口  URL:/api/item/{ skuId }  请求方式:get
export const reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`, method: 'get'})

//将产品添加到购物车中（或者更新某个产品的个数）URL:/api/cart/addTOCart/{skuId}/{skuNum} POST
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})

//获取购物车列表数据
//URL:/api/cart/cartList method:get
export const reqCartList =() =>requests({url:'/cart/cartList',method:'get'})

//删除购物车产品接口
//URL:/api/cart/deleteCart/{skuId} method:DELETE
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//删除商品的选中状态
//URL:/api/cart/checkCart/{skuId}/{isChecked}  method:get
export const reqUpdateCheckedById = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码
//URL:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册
//url:/api/user/passport/register method:post  phone code password
export const reqUserRegister = (data) => requests({url:'/user/passport/register',data,method:'post'})

//登录
//URL:/api/user/passport/login method:post phone password
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'})

//获取用户信息（需要带着用户的token向服务器要用户信息）
//URL:/api/user/passport/auth/getUserInfo  method:get
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出登录 Url:/api/user/passport/logout  get
export const reqLogout =() =>requests({url:'/user/passport/logout',method:'get'})

//获取用户地址：/api/user/userAddress/auth/findUserAddressList method:get
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//获取商品清单 /api/order/auth/trade
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'})

//提交订单 url：/api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

//获取支付信息 /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//获取订单的支付状态  url:/api/payment/weixin/queryPayStatus/{orderId}
export const reqPayState = (orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

//获取订单列表 url:/api/order/auth/{page}/{limit}
export const reqMyOrderList = (page, limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'})