import * as echarts from 'echarts';
import 'echarts-gl';

export default {
  name: 'echarts',
  props: {
    chartName: null,
    options: null,
    chartStyle: null,
    onClick: false
  },
  data() {
    return {
      echartsModel: null
    };
  },
  watch: {
    options: {
      handler() {
        if (!this.$globalmethod.isEmpty(this.echartsModel)) {
          this.echartsModel.dispose();
        }
        this.drawInit();
      },
      deep: true
    },
    chartStyle: {
      handler() {
        if (!this.$globalmethod.isEmpty(this.echartsModel)) {
          this.echartsModel.resize();
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    window.addEventListener('resize', this.drawResize, 20);
    this.drawInit();
  },
  methods: {
    drawInit() {
      this.echartsModel = echarts.init(this.$refs[this.chartName]);
      this.echartsModel.clear();
      this.echartsModel.showLoading('default', {
        text: '加载中',
        color: this.$globaldata.color[0],
        textColor: this.$globaldata.color[0],
        maskColor: 'rgba(0, 0, 0, 0.5)',
        zlevel: 0
      });
      this.echartsModel.setOption(this.options);
      this.echartsModel.off('click');
      if (this.onClick) {
        this.echartsModel.on('click', (param) => {
          this.$emit('chartClick', param);
        });
      }
      this.echartsModel.hideLoading();
    },
    drawResize() {
      if (!this.$globalmethod.isEmpty(this.echartsModel)) {
        this.echartsModel.resize();
      }
    }
  },
  beforeUnmount() {
    this.echartsModel.dispose();
    window.removeEventListener('resize', this.drawResize, 20);
  }
};
