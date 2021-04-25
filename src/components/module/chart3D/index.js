import option from './data.js';

export default {
  name: 'chart3DTpl',
  data() {
    return {
      barData3D: { // 3D柱状图数据
        name: 'summary_barData3D',
        style: {
          width: '100%',
          height: 'calc(50vh - 120px)'
        },
        xAxis3D: [],
        yAxis3D: [],
        data: []
      },
      lineData3D: { // 3D折线图数据
        name: 'summary_lineData3D',
        style: {
          width: '100%',
          height: 'calc(50vh - 120px)'
        },
        data: []
      },
      scatterData3D: { // 3D散点图数据
        name: 'summary_scatterData3D',
        style: {
          width: '100%',
          height: 'calc(50vh - 120px)'
        },
        dimensions: [],
        data: []
      },
      surfaceData3D: { // 3D曲面图数据
        name: 'summary_surfaceData3D',
        style: {
          width: '100%',
          height: 'calc(50vh - 120px)'
        }
      }
    };
  },
  computed: {
    barData3DDeal() { // 3D柱状图数据（处理）
      let obj = this.$lodash.cloneDeep(option.bar3D);

      obj.xAxis3D.data = this.barData3D.xAxis3D;
      obj.yAxis3D.data = this.barData3D.yAxis3D;
      obj.series[0].data = this.barData3D.data;
      obj.visualMap.max = this.$globalmethod.isEmpty(this.barData3D.data) ? 0 :
        Math.max.apply(null, this.barData3D.data.map(item => item[2]));
      return obj;
    },
    lineData3DDeal() { // 3D折线图数据（处理）
      let obj = this.$lodash.cloneDeep(option.line3D);

      obj.series[0].data = this.lineData3D.data;
      obj.visualMap.max = this.$globalmethod.isEmpty(this.lineData3D.data) ? 0 :
        Math.max.apply(null, this.lineData3D.data.map(item => item[2]));
      return obj;
    },
    scatterData3DDeal() { // 3D折线图数据（处理）
      let obj = this.$lodash.cloneDeep(option.scatter3D);

      obj.dataset.dimensions = this.scatterData3D.dimensions;
      obj.dataset.source = this.$lodash.concat(this.scatterData3D.dimensions, this.scatterData3D.data);
      obj.series[0].encode.x = this.scatterData3D.dimensions[0];
      obj.series[0].encode.y = this.scatterData3D.dimensions[1];
      obj.series[0].encode.z = this.scatterData3D.dimensions[2];
      return obj;
    },
    surfaceData3DDeal() { // 3D曲面图数据（处理）
      let obj = this.$lodash.cloneDeep(option.surface3D);

      return obj;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() { // 初始化
      this.get3dBarData();
      this.get3dLineData();
      this.get3dScatterData();
    },
    get3dBarData() { // 获取3D柱状图数据
      this.$axios.getData({
        url: '/3d_bar_test',
        method: 'get',
        params: {
          isMock: true
        }
      }).then(res => {
        this.$lodash.assign(this.barData3D, res.data.data);
      });
    },
    get3dLineData() { // 获取3D折线图数据
      this.$axios.getData({
        url: '/3d_line_test',
        method: 'get',
        params: {
          isMock: true
        }
      }).then(res => {
        this.$lodash.assign(this.lineData3D, res.data.data);
      });
    },
    get3dScatterData() { // 获取3D散点图数据
      this.$axios.getData({
        url: '/3d_scatter_test',
        method: 'get',
        params: {
          isMock: true
        }
      }).then(res => {
        this.$lodash.assign(this.scatterData3D, res.data.data);
      });
    }
  }
};
