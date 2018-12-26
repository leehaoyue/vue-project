import Vue from 'vue'

Vue.prototype.$globaldata = {
  color: {
    // 主色
    primaryColor: '#72afff', // 蓝色
    // 辅助色
    waringColor: '#f98508', // 橙色
    successColor: '#26b44b', // 绿色
    dangerColor: '#ff000c', // 红色
    infoColor: '#909399', // 灰色
    lightBlue: '#f1f7fd', // 淡蓝色
    lightGrey: '#F5F5F7', // 淡灰色
    darkBlack: '#001529', // 深黑色
    grayScaleColor: ['#303133', '#606266', '#909399', '#C0C4CC', '#DCDFE6', '#E4E7ED', '#EBEEF5', '#F2F6FC'] // 中性色【灰度下标：0（最深）→7（最浅）】
  }
}
