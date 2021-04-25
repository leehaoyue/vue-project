import pageHeader from '@/views/header/index.vue'; // 页头
import pageAside from '@/views/aside/index.vue'; // 侧边栏
import layout from '@/views/layout/index.vue'; // 布局-layout

export default {
  name: 'containerTpl',
  data() {
    return {
      failed: {
        getLine: true // 线路返回情况
      },
      showCount: 0
    };
  },
  computed: {
    aside() {
      return this.$globaldata.container.aside.width;
    },
    showDetail() {
      return Object.keys(this.failed).length === this.showCount;
    }
  },
  watch: {
    '$route.name': {
      handler(n, o) {
        if (n==='systemfc' || o==='systemfc' || !o) {
          let obj = {};

          for (let i in this.failed) {
            obj[i] = false;
          }
          this.failed = obj;
          this.init();
        } else {
          for (let i in this.failed) {
            if (!this.failed[i]) {
              this[i]();
            }
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    init() { // 初始化
      this.showCount = 0;
      this.getLine();
    },
    getLine() { // 获取线路
      this.failed.getLine = true;
      this.showCount += 1;
    }
  },
  components: {
    pageHeader,
    pageAside,
    layout
  }
};