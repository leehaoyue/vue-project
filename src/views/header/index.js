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
      this.$store.commit(this.limit, {});
      this.$router.replace('/refresh');
    }
  }
};
