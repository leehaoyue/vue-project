const cp = require('child_process');
const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const Offset = kafka.Offset;
let topics = [{
  topic: '',
  offset: 0
}];
let options = {
  groupId: new Date().getTime().toString(),
  autoCommit: true,
  autoCommitMsgCount: 100,
  autoCommitIntervalMs: 1000,
  autoOffsetReset: 'earliest',
  fetchMaxWaitMs: 100,
  fetchMinBytes: 1,
  fetchMaxBytes: 1024 * 1024,
  fromOffset: true,
  fromBeginning: true,
  encoding: 'utf8'
};

process.on('message', (params) => {
  let client = new kafka.Client(params.url);
  let offset = new Offset(client);
  topics[0] = {
    ...topics[0],
    topic: params.topic || topics[0].topic
  }
  let consumer = new Consumer(client, topics, options);
  console.log('kafka链接成功');
  consumer.on('message', (message) => {
    if(message.highWaterOffset - 1 === message.offset) {
      process.send({
        status: true,
        data: message
      })
    }
  });
  consumer.on('error', (message) => {
    process.send({
      status: false,
      data: message
    })
  });
  consumer.on('offsetOutOfRange', (topic) => {
    topic.maxNum = 2;
    offset.fetch([topic], (err, offsets) => {
      if (err) {
        return console.error(err);
      }
      let min = Math.min(offsets[topic.topic][topic.partition]);
      consumer.setOffset(topic.topic, topic.partition, min);
    })
  })
})
