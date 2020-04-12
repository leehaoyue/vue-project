export default {
  name: 'svgReader',
  props: {
    svgName: {
      type: String,
      required: true
    },
    svgID: {
      type: String,
      default: ''
    },
    svgInfo: {
      type: Object,
      default: null
    }
  },
  watch: {
    svgInfo: {
      handler(n) {
        this.initStyle(n);
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    name() {
      if (this.svgName) {
        return this.svgName;
      }
      return 'svgName';
    },
    id() {
      return this.svgID;
    }
  },
  data() {
    return {
    };
  },
  mounted() {},
  distoryed() {},
  methods: {
    initStyle(n) {
      if (!this.$globalmethod.isEmpty(n)) {
        for (let i in n) {
          for (let j in n[i]) {
            if (document.querySelector(`${i} /deep/ ${j}`) && n[i][j]) {
              document.querySelector(`${i} /deep/ ${j}`).textContent = n[i][j];
            }
          }
        }
      }
      let num = document.querySelectorAll('text /deep/ .num'),
        text = document.querySelectorAll('text /deep/ tspan');

      for (let i=0; i<text.length; i++) {
        text[i].setAttribute('font-size', '1.5em');
      }
      for (let i=0; i<num.length; i++) {
        num[i].setAttribute('fill', this.$globaldata.color[2]);
        num[i].setAttribute('font-weight', '900');
      }
    }
  }
};
