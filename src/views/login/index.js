export default {
  name: 'login',
  data() {
    return {
      activeName: 'login',
      loginForm: {
        username: '',
        pwd: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'change', message: '此项必填！' }],
        pwd: [{ required: true, trigger: 'change', message: '此项必填！' }]
      },
      logupForm: {
        username: '',
        pwd: '',
        'confirm_pwd': ''
      },
      logupRules: {
        username: [{ required: true, trigger: 'change', message: '此项必填！' }],
        pwd: [{ required: true, trigger: 'change', message: '此项必填！' }],
        'confirm_pwd': [{ required: true, trigger: 'change', message: '此项必填！' }]
      }
    };
  },
  computed: {
    src() {
      return this.$globaldata.link+'logo.png';
    }
  },
  created() {
    // this.login({
    //   limit: 'admin/limit',
    //   data: {
    //     limit: 'admin',
    //     name: '管理员'
    //   }
    // });
    // this.$message({
    //   type: 'success',
    //   message: '默认登录！',
    //   showClose: true
    // });
  },
  methods: {
    login() {
      if (this.loginForm.username==='admin' && this.loginForm.pwd==='admin') {
        this.$store.commit('admin/limit', {
          limit: 'admin',
          name: 'admin'
        });
        this.$message({
          message: '登录成功！',
          type: 'success',
          showClose: true
        });
        this.$router.push({ name: 'container' });
      } else {
        this.$notify({
          title: '提示',
          message: '工号 / 密码：admin / admin',
          type: 'warning'
        });
      }
    },
    logup() {
      if (this.logupForm.username==='admin' && this.logupForm.pwd==='admin' && this.logupForm.confirm_pwd==='admin') {
        this.$message({
          message: '注册成功，请登录！',
          type: 'success',
          showClose: true
        });
        this.activeName = 'login';
      } else {
        this.$notify({
          title: '提示',
          message: '工号 / 密码 / 确认密码：admin / admin / admin',
          type: 'warning'
        });
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName === 'loginForm') {
            this.login();
          } else {
            this.logup();
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
