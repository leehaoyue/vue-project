let websock = null, globalCallback = null;

function websocketonmessage(e) {
  globalCallback(e.data);
}

function websocketsend(agentData) {
  websock.send(agentData);
}

function websocketclose(e) {
  console.log('WebSocket-连接关闭 (' + e.code + ')');
}

function websocketOpen() {
  console.log('WebSocket-连接成功');
}

function initWebSocket(ws) {
  websock = new WebSocket(ws);
  websock.onmessage = function(e) {
    websocketonmessage(e);
  };
  websock.onclose = function(e) {
    websocketclose(e);
  };
  websock.onopen = function() {
    websocketOpen();
  };
  websock.onerror = function() {
    console.log('WebSocket-连接发生错误');
  };
}

function sendSocket(agentData, callback) {
  globalCallback = callback;
  if (websock.readyState === websock.OPEN) {
    websocketsend(agentData);
  } else if (websock.readyState === websock.CONNECTING) {
    setTimeout(function() {
      sendSocket(agentData, callback);
    }, 1000);
  } else {
    setTimeout(function() {
      sendSocket(agentData, callback);
    }, 1000);
  }
}

export default {
  initWebSocket, sendSocket
};
