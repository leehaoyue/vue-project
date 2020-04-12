import subItem from './sub/index.vue';

export default {
  name: 'aside',
  data() {
    return {
      list: [],
      defaultActive: ''
    };
  },
  computed: {
    collapse() { // 是否展开侧边栏导航
      return this.$store.state.common.asideCollapse;
    },
    limit() {
      if (Object.keys(this.$store.state.admin.limit).length!==0) {
        return '/aside_list_admin';
      }
      return '/aside_list_usr';
    }
  },
  watch: {
    '$route': {
      handler(n) {
        if (this.list.length>0 && JSON.stringify(this.list).indexOf(`"index":"${n.name}"`)<0) {
          this.$router.replace('/');
        }
      },
      deep: true,
      immediate: true
    },
    list: {
      handler(n) {
        if (n.length>0 && JSON.stringify(n).indexOf(`"index":"${this.$route.name}"`)<0) {
          this.$router.replace('/');
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.getAside();
  },
  methods: {
    getAside() { // 获取侧边栏目录
      this.$axios.getData({
        url: this.limit,
        method: 'get',
        params: {
          isMock: true
        }
      }).then(res => {
        this.list = res.data.data;
        if (this.$route.name) {
          this.defaultActive = this.$route.name;
        } else {
          this.defaultActive = this.getDefault(res.data.data);
        }
      });
    },
    getDefault(res) { // 设置默认展开项
      if (Array.isArray(res)) {
        if (!res[0].children) {
          return res[0].index;
        }
        return this.getDefault(res[0].children[0]);
      }
      if (!res.children) {
        return res.index;
      }
      return this.getDefault(res.children[0]);
    },
    selectMenuSub(info) { // 切换模块
      this.$router.push({ name: info });
    }
  },
  components: {
    subItem
  }
};
