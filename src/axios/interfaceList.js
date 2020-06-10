import $common from '@/mock/common.js';
import $data from '@/mock/data.js';
import { Message } from 'element-ui';

const common = [
    '/aside_list_admin',
    '/aside_list_usr',
    '/man_political'
  ],
  data = [
    '/table_data',
    '/chart_data'
  ],
  fc = (url) => {
    if (common.find(item=>item===url)) {
      return $common[url];
    }
    if (data.find(item=>item===url)) {
      return $data(url);
    }
    Message.warning({
      type: 'warning',
      showClose: true,
      message: `暂无该模拟接口【${url}】`
    });
  };

export default fc;
