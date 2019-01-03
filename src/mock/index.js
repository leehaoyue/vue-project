import Vue from 'vue'

const Mock = require('mockjs')

Vue.prototype.$mock = () => {
  return Mock.mock({
    tableList: {
      'status': true,
      'header': 'tableList',
      'body|1-10': [{
        'name': () => {
          return Mock.Random.cname()
        },
        'grade|100-300': 1,
        'code': () => {
          return Mock.Random.guid()
        }
      }]
    },
    card: {
      'status': true,
      'data|1-10': [{
        'img': () => {
          return Mock.Random.dataImage('200x100', Mock.mock('@title(1)'))
        },
        'text': () => {
          return Mock.mock('@title(3, 10)')
        },
        'time': () => {
          return Mock.mock('@datetime("yyyy-MM-dd A HH:mm:ss")')
        }
      }]
    }
  })
}
