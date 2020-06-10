export default {
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
};
