import { createApp } from 'vue';
import App from '../App.vue';
import $globalmethod from '@/global/globalMethod';

const app = createApp(App);

// 表格更新返回顶部
app.directive('updataTable', {
  update: (el, bind) => {
    let node = el.getElementsByClassName(bind.value || 'el-table__body-wrapper');

    if (!$globalmethod.isEmpty(node)) {
      node[0].scrollTop = 0;
    }
  }
});
