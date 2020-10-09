// const webpackConfig = require("../webpack.config");
// const fs = require('fs')

// console.log('ook');
// console.log('no');



// webpack-dev-server 打包好的文件默认托管到内存中





// 1、这两个在导入时，接受的成员名称必须这么写
import React from 'react' // 创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom'  // 把创建好的 组件 和 虚拟DOM 放到页面上展示的

// 2、创建虚拟DOM元素
/* <h1 id='myh1' title='this is a h1'>这是一个big H1</h1> */
// const myh1 = React.createElement('h1',null,'这是一个big H1')
const myh1 = React.createElement('h1',{id:'myh1',title:'this is a big h1'},'这是一个big H1')
const mydiv = React.createElement('div',null,'这是一个div',myh1)

// 3、使用 ReactDOM 把虚拟DOM渲染到页面上
ReactDOM.render(mydiv,document.getElementById('app'))
