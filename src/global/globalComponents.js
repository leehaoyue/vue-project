import basicEcharts from '@/components/echarts/index.vue'; // Echarts基础模型
import buildingPage from '@/components/auxiliary/building/index.vue'; // 页面建设中
import nodata from '@/components/auxiliary/nodata/index.vue'; // 暂无数据
import pagetitle from '@/components/auxiliary/pagetitle/index.vue'; // 页面标题

export default (Vue) => {
  Vue.component('basicEcharts', basicEcharts);
  Vue.component('buildingPage', buildingPage);
  Vue.component('noData', nodata);
  Vue.component('pageTitle', pagetitle);
};
