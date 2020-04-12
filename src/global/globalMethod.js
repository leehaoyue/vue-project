export default {
  // url截取参数
  getURLString(key) {
    let reg = new RegExp('(^|&)'+ key +'=([^&]*)(&|$)'),
      r = window.location.search.substr(1).match(reg);

    if (r !== null) {
      return unescape(r[2]);
    }
    return null;
  },
  // 获取cookie
  getCookie(param){
    let cookiename = param + '=',
      cookieinfo = document.cookie.split(';');

    for (let i=0; i<cookieinfo.length; i++) {
      if (cookieinfo[i].trim().indexOf(cookiename)===0) {
        return cookieinfo[i].trim().substring(cookiename.length, cookieinfo[i].trim().length);
      }
    }
    return null;
  },
  // 阻止事件冒泡
  cancelBubble(e) {
    e.cancelBubble = true;
  },
  // 判断是否为空
  isEmpty: (obj) => {
    if (typeof obj === 'boolean') {
      return false;
    }
    if ((!obj || obj === '') && obj !== 0) {
      return true;
    }
    if (typeof obj === 'string' && !obj.replace(/\s/g, '')) {
      return true;
    }
    // eslint-disable-next-line
    if (Array.prototype.isPrototypeOf(obj) && obj.length === 0) {
      return true;
    }
    // eslint-disable-next-line
    if (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0) {
      if (obj instanceof Date) {
        return false;
      }
      return true;
    }
    return false;
  }
};
