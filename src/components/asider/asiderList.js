export default [{
  id: 1,
  label: '状态监视',
  symbal: 'fa fa-tachometer',
  children: [{
    id: 2,
    label: '数据分析'
  }, {
    id: 3,
    label: '综合监视'
  }]
}, {
  id: 4,
  label: '数据浏览',
  symbal: 'fa fa-th-large',
  children: [{
    id: 5,
    label: '客流',
    children: [{
      id: 6,
      label: '进出站量'
    }, {
      id: 7,
      label: 'OD'
    }]
  }, {
    id: 8,
    label: '行车',
    children: [{
      id: 9,
      label: '10号线'
    }, {
      id: 10,
      label: '17号线'
    }]
  }, {
    id: 11,
    label: '设备',
    children: [{
      id: 12,
      label: '10号线'
    }, {
      id: 13,
      label: '17号线'
    }]
  }]
}, {
  id: 14,
  label: '接口管理',
  symbal: 'fa fa-cog',
  children: [{
    id: 15,
    label: '接口状态'
  }]
}]