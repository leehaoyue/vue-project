// 折线图
export default {
  option: (data) => {
    return {
      tooltip: {
        trigger: 'axis'
      },
      dataZoom: [{
        type: 'slider',
        show: true,
        start: 0,
        end: 100
      }],
      legend: {
        data: data.legend
      },
      grid: {
        left: '3%',
        right: '4%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.xAxis
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle:{
            type:'dashed'
          }
        }
      },
      series: [{
        name: data.legend[0],
        type: 'line',
        data: data.yAxis[0],
        smooth: true,
        showSymbol: false,
        itemStyle: {
          color: '#26b44b',
          shadowColor: '#26b44b',
          shadowBlur: 10
        },
        lineStyle: {
          color: '#26b44b'
        }
      }, {
        name: data.legend[1],
        type: 'line',
        data: data.yAxis[1],
        smooth: true,
        showSymbol: false,
        itemStyle: {
          color: '#72afff',
          shadowColor: '#72afff',
          shadowBlur: 10
        },
        lineStyle: {
          color: '#72afff'
        }
      }] || data.series
    }
  }
}