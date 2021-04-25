const Mock = require('mockjs'),
  data = (info) => {
    return Mock.mock({
      /* 侧边栏目录 */
      '/aside_list_admin': {
        data: [{
          index: 'chart3D',
          label: '3D图表',
          icon: 'fas fa-chart-pie'
        }]
      },
      '/aside_list_usr': {
        data: [{
          index: 'chart3D',
          label: '3D图表',
          icon: 'fas fa-chart-pie'
        }]
      }
    })[info];
  };

export default data;
