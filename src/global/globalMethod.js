const Mock = require('mockjs');

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
  getCookie(param) {
    let cookiename = param + '=',
      cookieinfo = document.cookie.split(';');

    for (let i=0; i<cookieinfo.length; i++) {
      if (cookieinfo[i].trim().indexOf(cookiename)===0) {
        return cookieinfo[i].trim().substring(cookiename.length, cookieinfo[i].trim().length);
      }
    }
    return null;
  },
  // 获取指定元素
  getnode(key, val, childkey, arrobj) {
    if (Array.isArray(arrobj)) {
      for (let i in arrobj) {
        if (val === arrobj[i][key]) {
          return arrobj[i];
        } else if (arrobj[i][childkey] && arrobj[i][childkey].length>0) {
          let node = this.getnode(key, val, childkey, arrobj[i][childkey]);

          if (node) {
            return node;
          }
        }
      }
    } else {
      for (let i in arrobj) {
        if (val === i[key]) {
          return i;
        } else if (i[childkey] && i[childkey].length>0) {
          let node = this.getnode(key, val, childkey, i[childkey]);

          if (node) {
            return node;
          }
        }
      }
    }
  },
  // 阻止事件冒泡
  cancelBubble(e) {
    e.cancelBubble = true;
  },
  // 判断是否为空
  isEmpty(obj) {
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
  },
  // 时间转换
  timeFilter(data, type, deal) {
    let time = '', Y ='', M ='', D ='', H ='', MM ='', S = '',
      date = data;

    if (!date) {
      return '—';
    }
    if (deal) {
      let year = '', month = '', day = '', hour = '', minute = '';

      year = date.substring(0, 4);
      month = date.substring(4, 6);
      day = date.substring(6, 8);
      hour = date.substring(8, 10);
      minute = date.substring(10);
      date = `${year}-${month}-${day} ${hour}:${minute}`;
    }

    try {
      time = this.iSAndroid() ? date : date.replace(/-/g, '/');
    } catch (err) {
      time = date;
    }
    time = new Date(time);
    Y = time.getFullYear();
    M = time.getMonth()+1 < 10 ? '0'+(time.getMonth()+1) : time.getMonth()+1;
    D = time.getDate()< 10 ? '0'+time.getDate() : time.getDate();
    H = time.getHours()< 10 ? '0'+time.getHours() : time.getHours();
    MM = ':' + (time.getMinutes()< 10 ? '0'+time.getMinutes() : time.getMinutes());
    S = ':' + (time.getSeconds()< 10 ? '0'+time.getSeconds() : time.getSeconds());

    switch (type) {
    case 'hh:mm':
      time = `${H}${MM}`;
      break;
    case 'diff/hh:mm': {
      let diff = (new Date().getTime()-time.getTime())/(3600*1000*24);

      if (diff<1) {
        time = `${H}${MM}`;
      } else if (diff>=1 && diff<2) {
        time = `昨日 ${H}${MM}`;
      } else {
        time = `${Math.round(diff)}天前 ${H}${MM}`;
      }
      break;
    }
    case 'yyyy-mm-dd':
      time = `${Y}-${M}-${D}`;
      break;
    case 'yyyy.mm.dd':
      time = `${Y}年${M}月${D}日`;
      break;
    case 'yyyy-mm-dd/hh:mm':
      time = `${Y}-${M}-${D} ${H}${MM}`;
      break;
    case 'yyyy.mm.dd/hh:mm':
      time = `${Y}年${M}月${D}日 ${H}${MM}`;
      break;
    case 'yyyymmdd':
      time = `${Y}${M}${D}`;
      break;
    case 'yyyymmdd/hhmm':
      time = `${Y}${M}${D}${H}${MM}`.replace(/:/g, '');
      break;
    case 'hhmm':
      time = `${H}${MM}`;
      break;
    case 'yyyymmdd/hhmmss':
      time = `${Y}${M}${D}${H}${MM}${S}`.replace(/:/g, '');
      break;
    default:
      time = `${Y}-${M}-${D} ${H}${MM}`;
    }
    return time;
  },
  // 去掉空键值
  removeEmpty(obj) {
    let param = Object.assign({}, obj);

    for (let i in param) {
      if (this.isEmpty(param[i])) {
        delete param[i];
      }
    }
    return param;
  },
  // 数组去重
  reDuplication(arr, key) {
    let list = [];

    arr.forEach(item => {
      if (!list.find(data => data[key]===item[key])) {
        list.push(item);
      }
    });
    return list;
  },
  // 下载文件
  downloadFile({res, isBolb}) {
    let elt = document.createElement('a'),
      link = '',
      name = '';

    if (isBolb) {
      let blob = new Blob([res.data], {type: 'text/plain'});

      link = window.URL.createObjectURL(blob);
      name = res.headers['content-disposition'].match(/filename(\S*)xls/)[0];
    } else {
      link = res.data.data;
      name = link.substring(link.lastIndexOf('/') + 1);
    }
    elt.setAttribute('href', link+'?'+Mock.Random.id());
    elt.setAttribute('download', name);
    elt.setAttribute('target', '_blabk');
    elt.style.display = 'none';
    document.body.appendChild(elt);
    elt.click();
    document.body.removeChild(elt);
    if (isBolb) {
      window.URL.revokeObjectURL(link);
    }
  }
};
