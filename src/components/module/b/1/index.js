import { line, bar, pie, scatter } from './data.js';

export default {
  name: 'module_B_1',
  data() {
    return {
      lineChart: { // 折线图配置
        name: 'lineChart',
        data: []
      },
      barChart: { // 柱状图配置
        name: 'barChart',
        data: []
      },
      pieChart: { // 饼图配置
        name: 'pieChart',
        data: []
      },
      scatterChart: { // 散点图配置
        name: 'scatterChart',
        data: []
      }
    };
  },
  computed: {
    chartstyle() {
      return this.$store.state.common.asideCollapse ? {
        width: 'calc(40vw - 50px)',
        height: 'calc(50vh - 40px)'
      } : {
        width: 'calc(45vw - 50px)',
        height: 'calc(50vh - 40px)'
      };
    },
    lineOption() {
      let options = this.$lodash.cloneDeep(line),
        arr = this.lineChart.data.sort((a, b) => {
          return new Date(b).getTime() - new Date(a).getTime();
        });

      arr.forEach(item => {
        options.xAxis.data.push(item.label);
        options.series[0].data.push(item.value);
      });
      return options;
    },
    barOption() {
      let options = this.$lodash.cloneDeep(bar);

      this.barChart.data.forEach(item => {
        options.xAxis.data.push(item.label);
        options.series[0].data.push(item.value);
      });
      return options;
    },
    pieOption() {
      let options = this.$lodash.cloneDeep(pie);

      this.pieChart.data.forEach(item => {
        options.legend.data.push(item.label);
        options.series[0].data.push({
          value: item.value,
          name: item.label
        });
      });
      return options;
    },
    scatterOption() {
      let options = this.$lodash.cloneDeep(scatter);

      this.scatterChart.data.forEach(item => {
        options.series[0].data.push(item);
      });
      return options;
    }
  },
  created() {
    this.getChart();
  },
  methods: {
    getChart() { // 获取表格数据
      this.$axios.getData({
        url: '/chart_data',
        method: 'get',
        params: {
          isMock: true
        }
      }).then(res => {
        this.$set(this.lineChart, 'data', res.data.data.line);
        this.$set(this.barChart, 'data', res.data.data.bar);
        this.$set(this.pieChart, 'data', res.data.data.pie);
        this.$set(this.scatterChart, 'data', res.data.data.scatter);
      });
    }
  }
};
