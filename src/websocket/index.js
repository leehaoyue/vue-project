/*
  使用方法：
  1、引入
  import { sendWebsocket, closeWebsocket } from '@/websocket/index.js';

  2、建立连接
  sendWebsocket('wesocket地址', '请求参数', '成功回调函数', '异常回调函数');
  【成功回调函数，如：wsMessage(res) { consolr.log('返回数据', res) })】

  3、断开连接
  closeWebsocket();
 */

import { Message } from 'element-ui';

let websock = null,
  messageCallback = null,
  errorCallback = null,
  wsUrl = '';

function websocketonmessage (e) {
  messageCallback(e);
}

function websocketSend (agentData) {
  setTimeout(() => {
    if (websock.readyState === websock.OPEN) {
      websock.send(JSON.stringify(agentData));
    }
    if (websock.readyState === websock.CLOSED) {
      Message.closeAll();
      Message({
        type: 'warning',
        showClose: true,
        message: 'ws连接异常，请稍候重试！'
      });
      errorCallback();
    }
  }, 500);
}

function websocketclose (e) {
  if (e && e.code !== 1000) {
    Message.closeAll();
    Message({
      type: 'warning',
      showClose: true,
      message: 'ws连接异常，请稍候重试！'
    });
    errorCallback();
  }
}

function websocketOpen () {
  Message.closeAll();
  Message({
    type: 'success',
    showClose: true,
    message: 'ws连接成功！'
  });
}

function initWebSocket () {
  if (typeof WebSocket === 'undefined') {
    Message.closeAll();
    Message({
      type: 'warning',
      showClose: true,
      message: '您的客户端暂不支持WebSocket，无法获取数据！'
    });
    return false;
  }

  const requstWsUrl = wsUrl;

  websock = new WebSocket(requstWsUrl);

  websock.onmessage = function (e) {
    websocketonmessage(e);
  };

  websock.onopen = function () {
    websocketOpen();
  };

  websock.onerror = function (e) {
    Message.closeAll();
    Message({
      type: 'warning',
      showClose: true,
      message: 'ws连接异常，请稍候重试！'
    });
    errorCallback(e);
  };

  websock.onclose = function (e) {
    websocketclose(e);
  };
}

export function sendWebsocket (url, agentData, successCallback, errCallback) {
  wsUrl = url;
  initWebSocket();
  messageCallback = successCallback;
  errorCallback = errCallback;
  websocketSend(agentData);
}

export function closeWebsocket () {
  if (websock) {
    websock.close();
    websock.onclose();
  }
}
