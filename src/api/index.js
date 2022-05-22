//统一管理项目接口
//引入二次封装的axios(带有请求、响应的拦截器)
import requests from './ajax'
import mockRequests from './mockAjax'

//三级菜单的请求地址：/api/product/getBaseCategoryList GET请求 没有任何参数
export const reqGetCategoryList = ()=>requests(`/product/getBaseCategoryList`)

//获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor数据
export const reqFloorList =() => mockRequests.get('/floor')
