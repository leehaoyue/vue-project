import model from '@/page/model/index.vue' // 模型
import linkList from './linkList.js' // 模型

export default {
  name: 'layout',
  watch: {
    '$store.state.asideSelect': {
      handler(n) {
        this.getModel(n)
      },
      deep: true
    }
  },
  created() {
    this.getModel(this.$store.state.asideSelect)
  },
  methods: {
    getModel(n) {
      try {
        this.$store.commit('model', linkList[this.$store.state.idObj[n]].model)
      } catch (err) {
        this.$message({
          message: '该页面正在建设努力中。。。',
          type: 'warning'
        });
        this.$store.commit('model', {
          label: 'liquidFill',
          isBuilding: true,
          isEcharts: true
        });
      }
    }
  },
  components: {
    model
  }
}
