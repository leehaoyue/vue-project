import './modules/font_p.css';
import './modules/font_q.css';
import './modules/canvas2svg.js';
import './modules/marked.min.js';
import './modules/jszip.min.js';
import './modules/echarts.min.js';
import topology from 'topology-vue';
import 'topology-vue/topology-vue.css';

export default {
  name: 'topologyVue',
  data() {
    return {
      configs: {
        logo: {
          img: this.$globaldata.link+'logo.png',
          url: window.location,
          target: '_self'
        }
        // monaco: this.$globaldata.link+'modules/vs/base/worker/workerMain.js'
      },
      data: {
        data: {},
        component: true
      },
      editorShow: true,
      previewShow: false,
      editorTimer: setTimeout(() => {}),
      previewTimer: setTimeout(() => {}),
      lockTimer: setTimeout(() => {})
    };
  },
  computed: {
    dataDeal() {
      return this.$globalmethod.isEmpty(this.data) ? { data: {} } : this.data;
    }
  },
  methods: {
    onEvent(e) {
      switch (e.name) {
      case 'preview':
        this.$set(this, 'data', {
          data: this.$globalmethod.isEmpty(window.topology) ? this.data.data : window.topology.data
        });
        this.clearTimer();
        this.editorShow = false;
        this.previewTimer = setTimeout(() => {
          this.previewShow = true;
        });
        break;
      default:
        return;
      }
    },
    closePreview() {
      this.clearTimer();
      this.previewShow = false;
      this.editorTimer = setTimeout(() => {
        this.editorShow = true;
      });
      this.lockTimer = setTimeout(() => {
        let node = document.getElementsByClassName('t-icon t-unlock');

        node[0].click();
        node[0].click();
      });
    },
    clearTimer() {
      clearTimeout(this.editorTimer);
      clearTimeout(this.previewTimer);
      clearTimeout(this.lockTimer);
    }
  },
  berforeDestroy() {
    this.clearTimer();
  },
  components: {
    topology
  }
};
