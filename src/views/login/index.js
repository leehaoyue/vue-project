export default {
  name: 'login',
  methods: {
    login(info) {
      this.$store.commit(info.limit, info.data);
      this.$router.replace('/refresh');
    }
  }
};
