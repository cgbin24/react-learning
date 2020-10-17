##### 问题
- 1）redux默认不支持异步处理
- 2）应用中需要在redux中执行异步任务（ajax，定时器）

##### redux异步编程
###### 下载redux插件（异步中间件）
`npm i --save redux-thunk`

###### 使用
###### *store.js*
```
import { createStore, applyMiddleware } from "redux";
import thun from 'react-thunk'

import { counter } from './reducers';

// 生成一个store对象
const store = createStore(
  counter, 
  applyMiddleware(thun) // 应用上异步中间件
)  // 内部会第一次调用reducer函数得到初始state
```




##### 应用Redux DevTools插件
> 安装插件

> 下载工具依赖包
`npm i --save-dev redux-devtools-extension`
> 编码
```
// 在store.js中使用
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  counter,
  composeWithDevTools(applyMiddleware(thunk))
)
```
