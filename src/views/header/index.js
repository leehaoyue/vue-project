export default {
  name: 'header',
  computed: {
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
      this.$confirm('确认退出登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit(this.limit, {});
        this.$router.push({ name: 'login' });
      }).catch(() => {
        return;
      });
    }
  }
};
