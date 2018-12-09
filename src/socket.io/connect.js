import store from '@/store/index'

export default {
  connect: () => {
    return true
  },
  login: (data) => {
    store.commit(data.method, data)
  }
}