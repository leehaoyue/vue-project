import echarts from '../basis/index.vue' // 实例
import pie from '../case/pie/index' // 饼图
import line from '../case/line/index' // 折线图
import liquidFill from '../case/liquidFill/index.js' // 水球图

export default {
  name: 'echarts_panel',
  props: {
    model: {}, // 模型配置
    modelData: {} // 模型数据
  },
  data() {
    return {
      option: {},
      echartsModel: {
        pie: pie,
        line: line,
        liquidFill: liquidFill
      }
    }
  },
  watch: {
    modelData: {
      handler(n) {
        this.handleData(n)
      },
      deep: true
    }
  },
  mounted() {
    this.handleData(this.modelData)
  },
  methods: {
    handleData(option) {
      try {
        this.$set(this, 'option', this.echartsModel[option.name].option(option))
      } catch (err) {}
    }
  },
  components: {
    echarts
  }
}