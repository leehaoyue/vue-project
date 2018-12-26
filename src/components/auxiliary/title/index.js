export default {
  name: 'titleLabel',
  props: {
    model: {}
  },
  data() {
    return {
      style: [{
        fontSize: '2em',
        borderColor: this.$globaldata.color.primaryColor
      }, {
        fontSize: '1.8em',
        borderColor: this.$globaldata.color.waringColor
      }, {
        fontSize: '1.6em',
        borderColor: this.$globaldata.color.successColor
      }, {
        fontSize: '1.4em',
        borderColor: this.$globaldata.color.dangerColor
      }, {
        fontSize: '1.2em',
        borderColor: this.$globaldata.color.infoColor
      }]
    }
  }
}