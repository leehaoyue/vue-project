import echarts from '@/components/echarts/panel/index.vue' // Echarts
import tableList from '@/components/auxiliary/table/index.vue' // 表格
import subway from '@/components/auxiliary/subway/index.vue' // 地铁图
import pagination from '@/components/auxiliary/pagination/index.vue' // 分页器
import titleLable from '@/components/auxiliary/title/index.vue' // model标题

export default(Vue) => {
  Vue.component('echarts', echarts);
  Vue.component('tableList', tableList);
  Vue.component('subway', subway);
  Vue.component('pagination', pagination);
  Vue.component('titleLable', titleLable);
}