// 1、导入包
import React from 'react'
import ReactDOM from 'react-dom'


// 2、创建虚拟DOM元素


let a = 0
let str = "welcome to new world"
let bol = true
let title = "this is a title"
const h1 = <h1>this is a h1</h1>
const arr = [
  <h2>this is a h2</h2>,
  <h3>this is a h3</h3>
]

const arrStr = ['喜羊羊','懒洋洋','沸羊羊','美羊羊']

const as = []

arrStr.forEach(item => {
  const temp = <h5>{item}</h5>
  as.push(temp)
})

// 3、调用 render 函数渲染
ReactDOM.render(<div>这是一个div {a+9}
  <hr/>
  {str}
  <hr/>
  {bol ? "this is true" : "this is false"}
  <hr/>
  <p title={title} >this is a tag</p>
  <hr/>
  {h1}
  <hr/>
  {arr}
  <hr/>
  {as}
  <hr/>
  {arrStr.map(item => <div key={item}><h2>{item}</h2></div>)}
  <hr/>
  {/* <p class="myele">this is a tag</p> */}
  <p className="myele">this is a tag</p>
  <hr/>
  {/* <label for="ooo"></label> */}
  <label htmlFor="ooo">this is a label</label>
</div>, document.getElementById('app'))


