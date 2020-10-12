##### 组件间通信方式
###### 使用消息订阅（subscribe）-发布（publish）机制
- 1、工具库：PubSubJS
- 2、下载 `npm install pubsub-js --save`
- 3、使用：
  ``` 
  import PubSub from 'pubsub-js' // 引入
  PubSub.subscribe('delete',function(data){}); // 订阅
  PubSub.publish('MY TOPIC', 'hello world!'); // 发布
  ```