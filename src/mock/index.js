const Mock = require('mockjs')

export default {
  tableData: Mock.mock({
    'data|1-10': [{
      'name': () => {
        return Mock.Random.cname()
      },
      'grade|100-300': 1,
      'code': () => {
        return Mock.Random.guid()
      }
    }]
  })
}
