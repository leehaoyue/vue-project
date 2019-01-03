import dealData from './dealData.js' // 数据处理

export default {
  name: 'model',
  props: {
    model: {}
  },
  data() {
    return {
      loading: true,
      dataNull: false,
      modelData: {}
    }
  },
  watch: {
    '$store.state.asideSelect': {
      handler() {
        this.loadingMask(true, false);
      },
      deep: true
    },
    model: {
      handler(n) {
        this.getData(n)
      },
      deep: true
    }
  },
  created() {
    this.getData(this.model)
  },
  methods: {
    // 获取模型数据
    getData(model) {
      this.$socket.disconnect();
      this.loadingMask(true, false);
      if (model.interface) {
        if (model.realTime) {
          this.getSocket(model)
        } else {
          this.getAxios(model)
        }
      } else if(model.isBuilding) {
        this.setModel();
        this.loadingMask(false, false);
      } else {
        this.loadingMask(false, false);
      }
    },
    // HTTP请求
    getAxios(param) {
      this.$service.getModel(param.url, param.method, param.params).then((res) => {
        this.setModel(res.data.name, res.data.data);
        this.loadingMask(false, false);
      }).catch(() => {
        if (param.isMock) {
          this.setModel(param.interface, this.$mock()[param.interface]);
          this.loadingMask(false, false);
        } else {
          this.confirmMask(param, 'getAxios');
          this.loadingMask(false, true);
        }
      })
    },
    // 即时通讯
    getSocket(param) {
      this.$socket.disconnect()
      this.$socket.connect(process.env.socketAPI)
      this.$socket.emit('start', {
        topic: param.topic,
        name: param.name,
        method: 'setData'
      });
      this.$socket.on('connect_error', (error) => {
        this.$socket.disconnect()
        this.confirmMask(param, 'getSocket')
      });
    },
    // 加载、暂无数据遮罩
    loadingMask(loading, dataNull) {
      this.$set(this, 'loading', loading);
      this.$set(this, 'dataNull', dataNull);
    },
    // 连接失败回调提示
    confirmMask(param, fcname) {
      this.$confirm('连接失败，请重试', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        type: 'warning'
      }).then(() => {
        this[fcname](param);
      }).catch(() => {
        this.loadingMask(false, true);
      });
    },
    // 设置模型数据
    setModel(name, data) {
      if (name && data) {
        this.$set(this, 'modelData', dealData[name](data));
      } else {
        this.$set(this, 'modelData', {
          name: 'liquidFill'
        });
      }
    }
  },
  sockets: {
    // 即时通讯回调
    reback(data) {
      try {
        this.setModel(data.data.name, data)
        this.loadingMask(false, false);
      } catch (err) {
        this.loadingMask(false, true);
      }
    }
  }
}
