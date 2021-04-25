import $common from '@/mock/common.js';
import $data from '@/mock/data.js';
import { ElMessage } from 'element-plus';

const common = [
    '/aside_list_admin'
  ],
  data = [
    '/3d_bar_test',
    '/3d_line_test',
    '/3d_scatter_test'
  ],
  fc = (url) => {
    if (common.find(item=>item===url)) {
      return $common(url);
    }
    if (data.find(item=>item===url)) {
      return $data(url);
    }
    ElMessage.closeAll();
    ElMessage({
      type: 'warning',
      showClose: true,
      message: `暂无该模拟接口【${url}】`
    });
  };

export default fc;
