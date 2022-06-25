import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = true

//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcar from './shopcar'
import user from './user'

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcar,
        user
    }
})