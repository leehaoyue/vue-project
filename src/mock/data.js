const Mock = require('mockjs'),
  data = (info) => {
    return Mock.mock({
      '/3d_bar_test': { // 3D柱状图数据
        data: {
          'xAxis3D|24': [() => Mock.Random.cname()],
          'yAxis3D|7': [() => Mock.Random.county()],
          data: () => {
            let arr = [];

            for (let i=0; i<27*7; i++) {
              arr.push([Mock.Random.natural(0, 23), Math.floor(i%7), Mock.Random.natural(0, 100)]);
            }
            return arr;
          }
        }
      },
      '/3d_line_test': { // 3D折线图数据
        data: {
          data: () => {
            let arr = [], num = Mock.Random.natural(20, 50);

            for (let t = 0; t < num; t += 0.001) {
              let x = (1 + num / 100 * Math.cos(num * 3 * t)) * Math.cos(t),
                y = (1 + num / 100 * Math.cos(num * 3 * t)) * Math.sin(t),
                z = t + 2 * Math.sin(num * 3 * t);

              arr.push([x, y, z]);
            }
            return arr;
          }
        }
      },
      '/3d_scatter_test': { // 3D散点图数据
        data: {
          'dimensions|5': [() => Mock.Random.ctitle()],
          'data|99': [[() => Mock.Random.natural(100, 1000), () => Mock.Random.natural(0, 100), () => Mock.Random.natural(1000, 10000), () => Mock.Random.natural(0, 100), () => Mock.Random.cname(), () => Mock.Random.natural(10000, 100000)]]
        }
      }
    })[info];
  };

export default data;
