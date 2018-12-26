import asiderList from './asiderList.js' // 侧边栏内容
import submenu from './item/index.vue' // 侧边栏元素

export default {
  name: 'asider',
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      idObj: {},
      defaultActive: 1, // 默认激活菜单的
      defaultOpeneds: [0], // 默认选中节点
      asiderList: asiderList
    }
  },
  created() {
    this.asiderListFC(asiderList)
    this.$store.commit('idObj', this.idObj)
    this.$store.commit('selectFC', 2)
  },
  methods: {
    // 侧边栏选中选项
    handleNodeClick(id) {
      if (id !== this.$store.state.asideSelect) {
        this.$store.commit('selectFC', id)
      }
    },
    // 侧边栏id映射model模型
    asiderListFC(data) {
      for (let i in data) {
        if (data[i].children) {
          this.asiderListFC(data[i].children)
        } else {
          this.idObj[data[i].id] = Object.keys(this.idObj).length;
        }
      }
    }
  },
  components: {
    submenu
  }
}