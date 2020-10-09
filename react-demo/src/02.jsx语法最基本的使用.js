// 1、导入包
import React from 'react'
import ReactDOM from 'react-dom'


// 2、创建虚拟DOM元素
// 虚拟DOM元素：用js对象的形式，来表示DOM和DOM之间的嵌套关系
// const mydiv = React.createElement('div',{id: 'mydiv', title: 'div...'},'这是一个div')

// HTML 标记语言更加利于开发
/**
 * JS文件中 默认不支持写HTML
 * 可以使用 babel 进行转换
 * 在JS中 混合写入类似于 HTML 的语法 称之为 JSX---> 符合XML规范的JS
 * JSX语法的本质：在运行时，转换成 React.createElement 来执行
 */
const mydiv = <div id='mydiv' title='div...'>这是一个div<h1>this is a tag</h1></div>



// 3、调用 render 函数渲染
ReactDOM.render(mydiv, document.getElementById('app'))


