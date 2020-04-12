const Mock = require('mockjs'),
  data = (info) => {
    return Mock.mock({
      /* 侧边栏目录 */
      '/aside_list_admin': {
        data: [{
          index: 'module_A',
          label: '模块-A',
          icon: 'fa fa-table'
        }, {
          index: 'module_B',
          label: '模块-B',
          icon: 'fa fa-line-chart',
          children: [{
            index: 'module_B_1',
            label: '子模块-B-1'
          }, {
            index: 'module_B_2',
            label: '子模块-B-2'
          }]
        }, {
          index: 'module_C',
          label: '模块-C',
          icon: 'fa fa-check-square-o'
        }]
      },
      '/aside_list_usr': {
        data: [{
          index: 'module_A',
          label: '模块-A',
          icon: 'fa fa-table'
        }]
      },
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
      },
      /* 表单数据 */
      '/man_political': {
        data: [{
          value: 0,
          label: '中共党员'
        }, {
          value: 1,
          label: '中共预备党员'
        }, {
          value: 2,
          label: '共青团员'
        }, {
          value: 3,
          label: '民革党员'
        }, {
          value: 4,
          label: '民盟盟员'
        }, {
          value: 5,
          label: '民建会员'
        }, {
          value: 6,
          label: '民进会员'
        }, {
          value: 7,
          label: '农工党党员'
        }, {
          value: 8,
          label: '致公党党员'
        }, {
          value: 9,
          label: '九三学社社员'
        }, {
          value: 10,
          label: '台盟盟员'
        }, {
          value: 11,
          label: '无党派人士'
        }, {
          value: 12,
          label: '群众'
        }]
      }
    })[info];
  };

export default data;
