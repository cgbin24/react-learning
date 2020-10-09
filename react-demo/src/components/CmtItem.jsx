import React from 'react'

// 第一种style样式引入方式
// const itemStyle = {border: '1px dashed', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'}
// const userStyle = {fontSize: '16px'}
// const contentStyle = {fontSize: '14px'}

// 第二种style样式引入方式 
// const iStyle = {
  //   item: {border: '1px dashed', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'},
  //   user: {fontSize: '16px'},
  //   content: {fontSize: '14px'}
  // }
  
// 第三种style样式引入方式 
import iStyle from '@/components/ItemStyle'



// 使用 function 构造函数，定义普通的无状态组件
export default function CmItem(props) {
  return <div style={iStyle.item}>
    <h1 style={iStyle.user}>评论人：{props.user}</h1>
    <p style={iStyle.content}>评论内容：{props.content}</p>
  </div>
}
