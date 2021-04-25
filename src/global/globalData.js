export default {
  link: window.location.origin+window.location.pathname, //项目地址
  container: { // 容器样式
    header: {
      height: '60px'
    },
    aside: {
      width: '100px'
    },
    footer: {
      height: '60px'
    }
  },
  color: ['#409EFF'/* 蓝色 */, '#F75A05'/* 橙色 */, '#67C23A'/* 绿色 */, '#F56C6C'/* 红色 */, '#909399'/* 灰色 */],
  grayScale: ['#303133', '#606266', '#909399', '#C0C4CC', '#DCDFE6', '#E4E7ED', '#EBEEF5', '#F2F6FC'] // 中性色【灰度：0（最深）→7（最浅）】
};
