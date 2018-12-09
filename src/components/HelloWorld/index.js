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
  },
  mounted() {
    // 即时通信
    this.$socket.emit('start', {
      topic: '', // Kafka topic_name
      method: 'socketQue' // vuex commit_name
    });
  }
}