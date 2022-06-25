import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo
} from '../../api/index'
import {
  setToken,
  getToken
} from '../../utils/token'
//登录与注册
const state = {
  code: "",
  token: getToken(),
  userInfo: ''
}
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  }
}
const actions = {
  //获取验证码
  async getCode({
    commit
  }, phone) {
    //获取验证码的这个接口：把验证码返回，但是正常情况下，后台把验证码发到用户手机上（为了省钱不发）
    let result = await reqGetCode(phone)
    if (result.code == 200) {
      commit("GETCODE", result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  //用户注册
  async userRegister({
    commit
  }, user) {
    let result = await reqUserRegister(user)
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
    //console.log(result);
  },
  //登录业务
  async userLogin({
    commit
  }, data) {
    let result = await reqUserLogin(data)
    //服务器下发token,用户唯一标识
    //将来经常通过带token找服务器用户信息展示
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token)
      //持久化存储token
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('file'))
    }
  },
  //获取用户信息
  async getUserInfo({
    commit
  }) {
    let result = await reqUserInfo()
    //console.log(result);
    if (result.code == 200) {
      //提交用户信息
      commit("GETUSERINFO", result.data)
      // return 'ok'
    }
    /* else{
          return  Promise.reject(new Error('file'))
        } */
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
