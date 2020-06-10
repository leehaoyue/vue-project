const Mock = require('mockjs'),
  data = (info) => {
    return Mock.mock({
      /* 表格数据 */
      '/table_data': {
        'data|100': [{
          id: () => Mock.Random.id(),
          name: () => Mock.Random.cname(),
          sex: () => ['男', '女'][Mock.Random.natural(0, 1)],
          age: () => Mock.Random.natural(25, 50),
          address: () => Mock.Random.county(),
          certificate: () => Mock.Random.guid()
        }]
      },
      /* chart数据 */
      '/chart_data': {
        data: {
          'line|10': [{
            value: () => Mock.Random.natural(0, 100),
            label: () => Mock.Random.county()
          }],
          'bar|10': [{
            value: () => Mock.Random.natural(0, 100),
            label: () => Mock.Random.city()
          }],
          'pie|10': [{
            value: () => Mock.Random.natural(0, 100),
            label: () => Mock.Random.province()
          }],
          'scatter|10': [
            [() => Mock.Random.natural(0, 100), () => Mock.Random.natural(0, 100)]
          ]
        }
      }
    })[info];
  };

export default data;
