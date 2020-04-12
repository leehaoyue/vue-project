export default {
  name: 'module_C',
  data() {
    return {
      formRule: [{ // 表单规则
        type: 'input',
        field: 'name',
        title: '姓名',
        props: {
          placeholder: '请输入姓名'
        },
        validate: [{ required: true, message: '此项必填！' }],
        col: {
          span: 12,
          labelWidth: '80px'
        }
      }, {
        type: 'radio',
        field: 'sex',
        title: '性别',
        validate: [{ required: true, message: '此项必填！' }],
        col: {
          span: 12,
          labelWidth: '80px'
        },
        value: 0,
        options:[
          { value: 0, label: '男' },
          { value: 1, label: '女' }
        ]
      }, {
        type: 'InputNumber',
        field: 'age',
        title: '年龄',
        props: {
          min: 18,
          max: 55,
          placeholder: '请输入年龄'
        },
        validate: [{ required: true, message: '此项必填！' }],
        col: {
          span: 12,
          labelWidth: '80px'
        }
      }, {
        type: 'select',
        field: 'political',
        title: '政治面貌',
        props: {
          placeholder: '请选择政治面貌'
        },
        validate: [{ required: true, message: '此项必填！' }],
        col: {
          span: 12,
          labelWidth: '100px'
        }
      }],
      formOption: { // 表单配置
        row: {
          gutter: 15
        },
        submitBtn: false,
        resetBtn: false
      },
      validateForm: '', // 表单实例
      formData: null // 表单数据
    };
  },
  mounted() {
    this.getFormSelect();
  },
  methods: {
    getFormSelect() { // 获取表单可选项
      this.$axios.getData({
        url: '/man_political',
        method: 'get',
        params: {
          isMock: true
        }
      }).then(res => {
        this.validateForm.updateRules({
          political: {
            options: res.data.data
          }
        });
      });
    },
    submit() { // 上传数据
      this.validateForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.formData = this.validateForm.formData();
          }).catch(() => {
            this.$message({
              showClose: true,
              message: '已取消！',
              type: 'info'
            });
          });
        } else {
          this.$message({
            showClose: true,
            message: '请确认填写正确！',
            type: 'error'
          });
        }
      });
    },
    reset() { // 重置表单
      this.formData = null;
      this.validateForm.resetFields();
    }
  }
};
