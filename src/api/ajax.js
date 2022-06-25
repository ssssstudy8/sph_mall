import axios from "axios"
import nprogress from "nprogress"
import "nprogress/nprogress.css"
import store from "@/store"

//利用axios对象的方法create 去创建一个axios实例
//requests就是axios 只不过稍微配置一下
const requests = axios.create({
  baseURL: "/api",
  timeout: 5000
})

//请求拦截器：在发请求之前，请求拦截器可以拦截到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  //现在问题是config是什么？配置对象
  //可以让进度条开始动
  if(store.state.detail.uuid_token){
    //请求头添加一个字段(userTempleID) ，和后台老师商量好了
    config.headers.userTempId = store.state.detail.uuid_token
  }
  //需要携带token带给服务器
  if(store.state.user.token){
    config.headers.token = store.state.user.token
  }
  nprogress.start()
  return config
})


//响应拦截器
requests.interceptors.response.use((res) => {
  //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事

  nprogress.done()
  return res.data
  //console.log(res)

}), (error) => {
  //响应失败
  return Promise.reject(error)
}

export default requests
