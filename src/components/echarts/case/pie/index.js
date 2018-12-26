// 饼图
export default {
  option: (data) => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      title: {
        text: data.title,
        x: 'center',
        y: 'center'
      },
      series: [{
        name: data.name,
        type: 'pie',
        radius: ['70%', '80%'],
        avoidLabelOverlap: false,
        label: {
          show: false
        },
        data: data.series
      }]
    }
  }
}