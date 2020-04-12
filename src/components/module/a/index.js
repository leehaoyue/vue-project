export default {
  name: 'module_A',
  data() {
    return {
      tableHead: [{
        prop: 'id',
        label: '工号'
      }, {
        prop: 'name',
        label: '姓名',
        width: 100
      }, {
        prop: 'sex',
        label: '性别',
        width: 100
      }, {
        prop: 'age',
        label: '年龄',
        width: 100
      }, {
        prop: 'address',
        label: '住址'
      }, {
        prop: 'certificate',
        label: '证书编号'
      }], // 表头
      tableData: [], // 表格数据
      currentPage: 1, // 当前页
      pagesize: 10 // 每页显示条数
    };
  },
  created() {
    this.getTable();
  },
  methods: {
    getTable() { // 获取表格数据
      this.$axios.getData({
        url: '/table_data',
        method: 'get',
        params: {
          isMock: true
        }
      }).then(res => {
        this.$set(this, 'tableData', res.data.data);
      });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
