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



*Grow your way forward, through the triumphs and the setbacks.*
*在胜利与挫折的交错中不断成长。*