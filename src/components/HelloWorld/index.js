export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    // http请求
		this.axios({
	    method: 'post',
	    url: '',
	    data: ''
	  })
	  .then((res) => {
	    this.msg = res.data;
	  })
	  .catch(err => {
	    // console.log(err);
	  })
    // 全局请求
    this.service.getRes({
      method: '',
      url: '',
      data: ''
    }).then(res => {
      // console.log(res)
    })
  },
  mounted() {
    // 即时通信
    this.getSocket()
  },
  methods: {
    // 即时通信
    getSocket() {
      this.$socket.disconnect()
      this.$socket.connect(process.env.socketAPI)
      this.$socket.emit('start', {
        topic: '', // Kafka topic_name
        method: '' // vuex commit_name
      });
      this.$socket.on('connect_error', (error) => {
        let r = confirm('连接失败，请重试');
        if (r === true) {
          this.getSocket()
        } else {
          this.$socket.disconnect()
        }
      });
    }
  }
}