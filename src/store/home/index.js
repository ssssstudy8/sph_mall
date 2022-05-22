import {
  reqGetCategoryList,
  reqGetBannerList,
  reqFloorList
} from '@/api'

//home模块小仓库
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}

const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}

const actions = {
  //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async getCategoryList({
    commit
  }) {
    let result = await reqGetCategoryList()
    if (result.code == 200) {
      commit("GETCATEGORYLIST", result.data)
    }
  },
  //获首页轮播图的数据
  async getBannerList({
    commit
  }) {
    let result = await reqGetBannerList()
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  //获取floor数据
  async getFloorList({
    commit
  }) {
    let result = await reqFloorList()
    if (result.code == 200) {
      commit('GETFLOORLIST', result.data)
    }
  }
}

const getters = {

}

const modules = {

}

export default {
  state,
  mutations,
  actions,
  getters,
  modules
}
