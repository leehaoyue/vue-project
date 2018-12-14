const http = require('http');
const fs = require('fs');
const server = http.createServer().listen(3000, '127.0.0.1'); //创建http服务
console.log('Server running at http://127.0.0.1:3000/');
const io = require('socket.io').listen(server);
const cp = require('child_process');
const kafka = cp.fork('./toKafka.js');

io.sockets.on('connection', (socket) => {
  console.log('socket-连接')
  socket.on('start', (req) => { //监听前端发送的start
    let temp = new Date().getTime();
    kafka.send({
      topic: req.topic,
      url: '', // zookeeper的ip+端口,
      temp: temp
    });
    kafka.on('message', (res) => {
      console.log('kafka-消费')
      if (temp === res.temp) {
        io.to(socket.id).emit('login', {
          ...res,
          method: req.method
        }); //触发emit,前端接收
      }
    })
  });
  socket.on('disconnect', () => {
    console.log('socket-断开')
    socket.disconnect();
  })
});