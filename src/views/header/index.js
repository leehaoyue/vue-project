export default {
  name: 'headerTpl',
  computed: {
    src() {
      return this.$globaldata.link+'banner.jpg';
    },
    name() {
      return this.$store.getters['admin/adminlimit'] || this.$store.getters['usr/usrlimit'];
    },
    limit() {
      if (Object.keys(this.$store.state.admin.limit).length!==0) {
        return 'admin/limit';
      }
      return 'usr/limit';
    }
  },
  methods: {
    // 退出
    excit() {
      this.$confirm('确认退出？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit(this.limit, {});
        this.$router.push({ name: 'login' });
        this.$message({
          type: 'success',
          message: '已退出！',
          showClose: true
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消！',
          showClose: true
        });
      });
    },
    // 刷新
    refresh() {
      this.$router.replace('/refresh');
    }
  }
};
