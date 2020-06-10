import axios from 'axios';
import Qs from 'qs';
import $server from './interfaceList.js';
import { Message, MessageBox, Loading } from 'element-ui';

const $instance = axios.create({
  transformRequest: [data => { // 请求数据处理（防止后端接收不到参数）
    if (Object.prototype.toString.call(data) === '[object FormData]') {
      return data;
    }
    return Qs.stringify(data);
  }],
  transformResponse: [data => { // ie兼容性（解决无返回数据问题）
    if (Boolean(window.ActiveXObject) || 'ActiveXObject' in window || navigator.userAgent.indexOf('MSIE') >= 0) {
      return JSON.parse(data);
    }
    return data;
  }],
  baseURL: process.env.VUE_APP_API,
  responseType: 'json',
  timeout: 100000, // 超时定时器
  cancelToken: axios.CancelToken.source().token, // 取消请求（防止一个接口请求多次）
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// 自定义拦截器
$instance.interceptors.request.use(res => {
  // 请求成功
  return res;
}, err => {
  // 请求失败
  Message({
    type: 'warning',
    showClose: true,
    message: '请求失败，请重试！'
  });
  return Promise.reject(err);
});

$instance.interceptors.response.use(res => {
  // 响应成功
  return res;
}, err => {
  // 响应失败
  Message({
    type: 'error',
    showClose: true,
    message: '响应失败，请重试！'
  });
  return Promise.reject(err);
});

export default {
  getData({url, method, params, baseURL, responseType, headers}) {
    let loading = Loading.service({customClass: 'pageLoading', background: 'transparent'});

    return new Promise((resolve, reject) => {
      if (params && params.isMock) {
        let res = {
          data: $server(url)
        };

        resolve(res);
        Loading.service({customClass: 'pageLoading', background: 'transparent'}).close();
        return;
      }
      let methods = method || 'post',
        obj = methods !== 'get' ? {
          data: params
        } : {
          params: params
        };

      obj = headers ? {...obj,
        headers: headers
      } : obj;
      $instance({...obj,
        baseURL: baseURL || process.env.VUE_APP_API,
        responseType: responseType || 'json',
        method: methods,
        url: url
      }).then(res => {
        loading.close();
        if (res.data && res.data.status===200) {
          resolve(res);
        } else {
          MessageBox({
            title: '提示',
            message: res.data.message,
            showCancelButton: true,
            showConfirmButton: true,
            type: 'warning'
          }).then(action => {
            if (action === 'confirm') {
              this.getData({url, method, params, baseURL, responseType, headers});
            }
          }).catch(() => {
            MessageBox({
              type: 'info',
              showClose: true,
              message: '已取消！'
            });
          });
        }
      }).catch(err => {
        loading.close();
        MessageBox({
          title: '提示',
          message: `接口【${url}】错误，请重试！'`,
          showCancelButton: true,
          showConfirmButton: true,
          type: 'warning'
        }).then(action => {
          if (action === 'confirm') {
            this.getData({url, method, params, baseURL, responseType, headers});
          }
        }).catch(() => {
          Message({
            type: 'info',
            showClose: true,
            message: '已取消！'
          });
        });
        reject(err);
      });
    });
  },
  // 上传文件
  uploadFile({url, method, params, baseURL}) {
    let loading = Loading.service({customClass: 'pageLoading', background: 'transparent'});

    return new Promise((resolve, reject) => {
      let methods = method || 'post',
        formData = new FormData(),
        paramsObj = Object.assign({}, params),
        obj = {};

      for (let i in paramsObj) {
        if (paramsObj[i] in paramsObj) {
          delete paramsObj[i];
          break;
        }
      }
      for (let i in paramsObj) {
        if (Array.isArray(paramsObj[i])) {
          for (let j in paramsObj[i]) {
            formData.append(i, paramsObj[i][j], new Date().getTime());
          }
        } else {
          formData.append(i, paramsObj[i]);
        }
      }
      obj = methods !== 'get' ? {
        data: formData
      } : {
        params: formData
      };

      $instance({...obj,
        url: url,
        baseURL: baseURL || process.env.VUE_APP_API,
        method: methods,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        loading.close();
        if (res.data && res.data.status===200) {
          resolve(res);
        } else {
          MessageBox({
            title: '提示',
            message: `接口【${url}】错误，请重试！'`,
            showCancelButton: true,
            showConfirmButton: true,
            type: 'warning'
          }).then(action => {
            if (action === 'confirm') {
              this.uploadFile({url, method, params, baseURL});
            }
          }).catch(() => {
            Message({
              type: 'info',
              showClose: true,
              message: '已取消！'
            });
          });
        }
      }).catch(err => {
        loading.close();
        MessageBox({
          title: '提示',
          message: `接口【${url}】错误，请重试！'`,
          showCancelButton: true,
          showConfirmButton: true,
          type: 'warning'
        }).then(action => {
          if (action === 'confirm') {
            this.uploadFile({url, method, params, baseURL});
          }
        }).catch(() => {
          Message({
            type: 'info',
            showClose: true,
            message: '已取消！'
          });
          Message.info('已取消！');
        });
        reject(err);
      });
    });
  }
};
