// 1、导入包
import React from 'react'
import ReactDOM from 'react-dom'


// 第一种创建组件的方式
// 在构造函数中，使用props形参，接收外界 传递过来的数据
// 组件首字母必须为大写
function Hello(props) {
  // 如果 在一个组件中 return 一个 null 则表示此组件是空的 不会渲染任何内容
  // return null
  // 在组件中 必须返回一个 合法的JSX虚拟的DOM元素
  // props.name = 'nan'
  // 不论是vue还是react，组件中的props永远都是只读的，不能被再次赋值
  console.log(props);
  return <div>this is a dog name:{props.name}, age:{props.age}, gender:{props.gender}</div>
}

const dog = {
  name: '旺财',
  age: 2,
  gender: '雄'
}


// 3、调用 render 函数渲染
ReactDOM.render(<div>
 123
 {/* 直接把组建的名称 以标签的形式 写入即可（不需要像vue一样注册 */}
 {/* 使用组件并为组件传递 props 数据 */}
 {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello> */}
 <Hello {...dog}></Hello>
</div>, document.getElementById('app'))


