import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    asideDent: false, // 侧边栏是否展开
    asideSelect: '', // 侧边栏选中的模块
    model: {}, // 模型数据
    idObj: [] // 模型id列表
  },
  mutations: {
    dentFC(state) { // 侧边栏展开、收起
      state.asideDent = !state.asideDent
    },
    selectFC(state, obj) { // 侧边栏切换
      state.asideSelect = obj
    },
    model (state, obj) { // 模型配置
      state.model = obj
    },
    idObj(state, obj) { // 模型id列表
      state.idObj = obj
    }
  }
})

export default store
