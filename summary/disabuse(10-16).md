数据传递：

主--->子

在主组件中引入子组件时将数据传递给子组件

###### 引入

```
import child from './components/child'
```

###### 使用(传入参数)

```
<child date={data} ></child>
```



子组件中使用

每个组件都有一个 props 

传入过来的数据可以直接从 props 中获取

