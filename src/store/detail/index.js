import {
  reqGoodsInfo,
  reqAddOrUpdateShopCart
} from "../../api"
import {
  getUUID
} from '@/utils/uuid_token'
const state = {
  goodInfo: {},
  //游客临时身份
  uuid_token:getUUID()
}
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo
  }
}
const actions = {
  //获取产品信息的action
  async getGoodInfo({
    commit
  }, skuId) {
    let result = await reqGoodsInfo(skuId)
    if (result.code == 200) {
      commit('GETGOODINFO', result.data)
    }
  },
  //将产品添加到购物车
  async addOrUpdateShopCart({
    commit
  }, {
    skuId,
    skuNum
  }) {
    //加入购物车返回解构
    //加入购物车之后，前台将参数带给服务器
    //服务器写入数据成功，并没有返回其他数据，只返回code=200，代表此次操作成功
    //因为服务器没有返回其余数据，因此咱们不需要三连环存储数据
    let result = await reqAddOrUpdateShopCart(skuId, skuNum)
    //代表服务器加入购物车成功
    if (result.code == 200) {
      return "ok"
    } else {
      //加入购物车失败
      return Promise.reject(new Error("faile"))
    }
  }
}
const getters = {
  //简化数据而生
  //路径导航简化的数据
  categoryView(state) {
    //比如：state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
    //当前计算出的categoryView属性值至少是一个空对象，加的报错就不会存在
    return state.goodInfo.categoryView || {}
  },
  //简化产品信息
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  //产品售卖属性的简化
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || []
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
