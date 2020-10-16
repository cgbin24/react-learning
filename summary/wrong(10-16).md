##### 渲染App组件时错

###### 问题定位：传递数据时

```
ReactDom.render(<App />, document.getElementById('root'))
```

###### 导致错误

![image-20201016162908105](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201016162908105.png)

###### 解决方案

> 添加传递数据 store

```
ReactDom.render(<App store={store} />, document.getElementById('root'))
```

