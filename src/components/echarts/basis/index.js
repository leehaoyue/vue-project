import 'echarts-liquidfill' // 水球图

export default {
  name: 'echarts_basis',
  props: {
    option: {}
  },
  data() {
    return {
      param: {
        size: {
          width: '100%',
          height: '300px'
        }
      }
    }
  },
  watch: {
    option: {
      handler() {
        this.init();
      },
      deep: true
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.param = {
        size: {
          width: '100%',
          height: '300px'
        }
      };
      let options = Object.assign(this.param, this.option);
      let echarts = this.$echarts.init(this.$refs.echarts_basis);
      echarts.clear();
      echarts.setOption(options, true);
      window.addEventListener('resize', () => {
        echarts.resize();
      })
    }
  }
}
