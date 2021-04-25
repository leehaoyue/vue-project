import $globaldata from '@/global/globalData.js';

export default {
  bar3D: {
    visualMap: {
      max: 0,
      inRange: {
        color: [$globaldata.color[2], $globaldata.color[0], $globaldata.color[1], $globaldata.color[3]]
      }
    },
    xAxis3D: {
      type: 'category',
      data: []
    },
    yAxis3D: {
      type: 'category',
      data: []
    },
    zAxis3D: {
      type: 'value'
    },
    grid3D: {
      boxWidth: 200,
      boxDepth: 80,
      light: {
        main: {
          intensity: 1.2,
          shadow: true
        },
        ambient: {
          intensity: 0.3
        }
      }
    },
    series: [{
      type: 'bar3D',
      data: [],
      shading: 'lambert',
      label: {
        fontSize: 16,
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20,
          color: '#900'
        },
        itemStyle: {
          color: '#900'
        }
      }
    }]
  },
  line3D: {
    visualMap: {
      min: 0,
      max: 0,
      inRange: {
        color: [$globaldata.color[2], $globaldata.color[0], $globaldata.color[1], $globaldata.color[3]]
      }
    },
    xAxis3D: {
      type: 'value'
    },
    yAxis3D: {
      type: 'value'
    },
    zAxis3D: {
      type: 'value'
    },
    grid3D: {
      viewControl: {
        projection: 'orthographic'
      }
    },
    series: [{
      type: 'line3D',
      data: [],
      lineStyle: {
        width: 1
      }
    }]
  },
  scatter3D: {
    grid3D: {},
    xAxis3D: {
      type: 'category'
    },
    yAxis3D: {},
    zAxis3D: {},
    dataset: {
      dimensions: [],
      source: []
    },
    series: [
      {
        type: 'scatter3D',
        symbolSize: 5,
        encode: {
          x: '',
          y: '',
          z: '',
          tooltip: [0, 1, 2, 3, 4]
        }
      }
    ]
  },
  surface3D: {
    tooltip: {},
    backgroundColor: '#fff',
    visualMap: {
      show: false,
      dimension: 2,
      min: -1,
      max: 1,
      inRange: {
        color: [$globaldata.color[2], $globaldata.color[0], $globaldata.color[1], $globaldata.color[3]]
      }
    },
    xAxis3D: {
      type: 'value'
    },
    yAxis3D: {
      type: 'value'
    },
    zAxis3D: {
      type: 'value'
    },
    grid3D: {},
    series: [{
      type: 'surface',
      equation: {
        x: {
          step: 0.05
        },
        y: {
          step: 0.05
        },
        z: function (x, y) {
          if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
            return '-';
          }
          return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
        }
      }
    }]
  }
};
