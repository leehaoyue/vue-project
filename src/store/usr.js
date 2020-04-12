import $globalmethod from '@/global/globalMethod';

const limitcookie = () => {
  let name = $globalmethod.getCookie('name'),
    limit = $globalmethod.getCookie('limit');

  return limit==='usr' && name ? {
    name: name,
    limit: limit
  } : null;
};

export default {
  namespaced: true,
  state: {
    limit: limitcookie() || {} // 权限
  },
  getters: {
    usrlimit: state => { // 权限（处理后的数据）
      return state.limit.name;
    }
  },
  mutations: {
    limit(state, obj) {
      state.limit = obj;
      let expires = new Date().getTime() + 30*24*60*60*1000;

      document.cookie = `name=${state.limit.name};expires=${expires}`;
      document.cookie = `limit=${state.limit.limit};expires=${expires}`;
    }
  },
  actions: {}
};
