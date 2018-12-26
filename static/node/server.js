const http = require('http');
const fs = require('fs');
const server = http.createServer().listen(3000, '127.0.0.1'); //创建http服务
console.log('Server running at http://127.0.0.1:3000/');
const io = require('socket.io').listen(server);
const cp = require('child_process');
const kafka = cp.fork('./toKafka.js');
const Mock = require('mockjs')

io.sockets.on('connection', (socket) => {
  console.log('socket-连接')
  socket.on('start', (req) => { //监听前端发送的start
    let temp = new Date().getTime();
    kafka.send({
      topic: req.topic,
      url: '132.232.172.50:2181',
      temp: temp
    });
    kafka.on('message', (res) => {
      console.log('kafka-消费')
      if (temp === res.temp) {
        setInterval(() => {
          io.to(socket.id).emit('reback', {
            // ...res,
            status: true,
            data: {
              name: req.name,
              value: Mock.mock({
                'title': Mock.Random.title(1),
                'legend|2': [() => {return Mock.Random.title(1)}],
                'xAxis|10': [() => {return Mock.Random.time('HH:mm')}],
                'yAxis': {
                  '0|10': [() => {return Mock.Random.integer(100, 1000)}],
                  '1|10': [() => {return Mock.Random.integer(100, 1000)}]
                },
                'value|1-10': [{
                  'NAME': () => {return Mock.Random.cname()},
                  'VALUE|100-300': 1,
                  'TS': () => {return Mock.Random.guid()}
                }]
              }),
            },
            method: req.method
          }); //触发emit,前端接收
        }, 5000)
      }
    })
  });
  socket.on('disconnect', () => {
    console.log('socket-断开')
    socket.disconnect();
  })
});