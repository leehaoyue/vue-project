import headerJSON from './header.js'

export default {
  name: 'tableList',
  props: {
    modelData: {}
  },
  data() {
    return {
      labelList: [],
      tableData: [],
      pageInfo: {},
      style: {
        header: {
          background: this.$globaldata.color.grayScaleColor[6]
        },
        body: {
          odd: {
            background: this.$globaldata.color.grayScaleColor[6]
          },
          even: {
            background: '#fff'
          }
        }
      }
    }
  },
  watch: {
    modelData: {
      handler(n) {
        if (n.status) {
          this.$set(this, 'labelList', headerJSON[n.header])
          this.$set(this, 'tableData', n.body)
          this.$set(this, 'pageInfo', {
            total: n.body.length
          })
        } else {
          this.$set(this, 'labelList', [])
          this.$set(this, 'tableData', [])
        }
      }
    }
  },
  methods: {
    headerStyle() {
      return this.style.header;
    },
    bodyStyle(obj) {
      if (obj.rowIndex%2===0) {
        return this.style.body.even;
      }
      return this.style.body.odd; 
    }
  }
}
