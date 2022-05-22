import axios from "axios"
import nprogress from "nprogress"
import "nprogress/nprogress.css"

//利用axios对象的方法create 去创建一个axios实例
//requests就是axios 只不过稍微配置一下
const requests = axios.create({
  baseURL: "/mock",
  timeout: 5000
})

//请求拦截器：在发请求之前，请求拦截器可以拦截到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
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
