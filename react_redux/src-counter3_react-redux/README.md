##### 使用 react-redux 
###### 安装
`npm i --save react-redux`

index.js
###### 引入
`import { Provider } from 'react-redux'`

###### 使用(例)
*before*
```
function render() {
  ReactDom.render(<App store={store} />, document.getElementById('root'))
}

// 初始化渲染
render()

// 订阅监听（store中的状态变化了，就会自动调用进行重绘
store.subscribe(render)
```
*after*
```
ReactDom.render((
  <Provider store={store} >
    <App />
  </Provider>
), document.getElementById('root'))
```

app.js
##### 使用 react-redux  prop-types
###### 安装
`npm i --save prop-types`

###### 引入
`import PropTypes from "prop-types";`

###### 使用(例)
*before*
```
// 2、调用store的方法更新状态
this.props.store.dispatch(actions.increment(number))
```
*after*
```
// 新增
static propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}


// 2、调用store的方法更新状态
this.props.increment(number)

```
##### 使用 react-redux

###### 引入
`import { connect } from "react-redux";`

###### 使用(例)
*before*
```
export default class App extends Component {}
```
*after*
```
class App extends Component {}

export default connect(
  state => ({count: state}),
  {increment, decrement}
)(App)

```

###### *使用抽离UI和容器container分离*
> components
>> counter.jsx

> containers
>> app.js
    ```
    export default connect(
      state => ({count: state}),
      {increment, decrement}
    )(Counter)
    ```

