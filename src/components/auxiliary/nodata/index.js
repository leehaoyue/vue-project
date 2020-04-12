export default {
  name: 'nodate',
  props: {
    msg: '',
    lineHeight: ''
  },
  computed: {
    title() {
      return this.msg || '暂无数据';
    },
    style() {
      return {
        lineHeight: this.lineHeight || 2
      };
    }
  }
};
