export default {
  name: 'pagetitle',
  props: {
    title: ''
  },
  computed: {
    msg() {
      return this.title || '标题';
    }
  }
};
