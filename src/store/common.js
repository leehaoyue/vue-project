export default {
  namespaced: true,
  state: {
    asideCollapse: false // 侧边栏（折叠：true 展开：false）
  },
  mutations: {
    asideCollapse(state, bln) {
      state.asideCollapse = bln;
    }
  }
};
