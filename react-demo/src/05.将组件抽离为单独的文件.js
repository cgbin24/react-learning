// 1、导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 导入 Hello 组件
// 默认 如果不做单独配置 不能省略 .jsx 后缀名
// import Hello from './components/Hello.jsx'
// import Hello from './components/Hello'
// 注意：这里的 @ 符号 表示 项目的根目录 src 需要在webpack.config.js 中进行配置
import Hello from '@/components/Hello'


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


