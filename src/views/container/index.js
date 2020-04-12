import pageHeader from '@/views/header/index.vue'; // 页头
import pageAside from '@/views/aside/index.vue'; // 侧边栏
import layout from '@/views/layout/index.vue'; // 布局-layout

export default {
  name: 'container',
  computed: {
    aside() {
      return this.$store.state.common.asideCollapse ? 'auto' : this.$globaldata.container.aside.width;
    },
    tooltipCNT() {
      return this.$store.state.common.asideCollapse ? '展开导航' : '收起导航';
    },
    tooltipBTN() {
      return this.$store.state.common.asideCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left';
    }
  },
  methods: {
    collapseBtn() {
      this.$store.commit('common/asideCollapse', !this.$store.state.common.asideCollapse);
    },
    refresh() {
      this.$router.replace('/refresh');
    }
  },
  components: {
    pageHeader,
    pageAside,
    layout
  }
};