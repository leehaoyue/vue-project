export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
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
  }
}