export default [{
  model: [{
    label: 'tableList', // 模型名
    title: '表格', // 模型标题
    interface: 'tableList', // 接口名
    isEcharts: false, // 是否为ECharts
    realTime: false // 是否为即时通讯
  }]
}, {
  model: [{
    label: 'card',
    title: '卡片',
    interface: 'card',
    isEcharts: false,
    realTime: true
  }]
}, {
  model: [{
    label: 'form',
    title: '动态表单',
    interface: 'form',
    isEcharts: false,
    realTime: false
  }]
}, {
  model: [{
    label: 'line',
    title: '折线图',
    interface: 'line',
    isEcharts: true,
    realTime: true
  }]
}, {
  model: [{
    label: 'bar',
    title: '柱状图',
    interface: 'bar',
    isEcharts: true,
    realTime: true
  }]
}, {
  model: [{
    label: 'pie',
    title: '饼图',
    interface: 'pie',
    isEcharts: true,
    realTime: true
  }]
}, {
  model: [{
    label: 'radar',
    title: '雷达图',
    interface: 'radar',
    isEcharts: true,
    realTime: true
  }]
}, {
  model: [{
    label: 'graph',
    title: '关系图',
    interface: 'graph',
    isEcharts: true,
    realTime: true
  }]
}, {
  model: [{
    label: 'moreModel',
    title: '多个模型',
    interface: 'moreModel',
    isEcharts: false,
    realTime: false
  }]
}, {
  model: [{
    label: 'subway',
    title: '地铁图',
    interface: null,
    isEcharts: false,
    realTime: false
  }]
}]