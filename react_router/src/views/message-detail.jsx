import React from "react";
import Message from "./message";

const allMessages = [
  {id: 1, title: 'message001', content: 'this is 001'},
  {id: 2, title: 'message002', content: 'this is 002'},
  {id: 3, title: 'message003', content: 'this is 003'},
]

export default function MessageDetail(props) {
  // 得到请求参数中的id
  const {id} = props.match.params
  // debugger
  // 查询得到对应的message
  const message = allMessages.find((m) => m.id===id*1)  // 返回第一个结果为true的数组元素
  return (
    <ul>
      <li>ID: {message.id}</li>
      <li>TITLE: {message.title}</li>
      <li>CONTENT: {message.content}</li>
    </ul>
  )
}