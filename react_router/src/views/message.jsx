import React, { Component } from 'react'
import { Route } from "react-router-dom";

import MyNavLink from "../components/my-nav-link";
import MessageDetail from "./message-detail";

export default class Message extends Component {

  state = {
    messages: [
      // {id: 1, title: 'message001'},
      // {id: 2, title: 'message001'},
      // {id: 3, title: 'message001'},
    ]
  }

  componentDidMount () {
    // 模拟发送Ajax请求异步获取数据
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 2, title: 'message002'},
        {id: 3, title: 'message003'},
      ]
      // 更新状态
      this.setState({messages})
    }, 1000);
  }

  showDetail = (id) => {
    this.props.history.push(`/home/message/messagedetail/${id}`)
  }
  showDetail2 = (id) => {
    this.props.history.replace(`/home/message/messagedetail/${id}`)
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  turnOn = () => {
    // 使用原生js实现跳转
    window.location = 'http://www.baidu.com'
  }

  render () {

    return (
      <div>
        <ul>
          {
            this.state.messages.map((m, index) => (
              <li  key={index} > 
              {/* ${m.id}是传递的参数 */}
              {/* 路由链接和非路由链接的区别在于非路由链接会发请求<a href='#'></a> */}
                {/* <a href={`/home/message/messagedetail/${m.id}`} > {m.title} </a> */}
                <MyNavLink to={`/home/message/messagedetail/${m.id}`} > {m.title} 
                </MyNavLink>
                &nbsp;&nbsp; <button onClick={() => {this.showDetail(m.id)}} >push()查看</button>
                &nbsp;&nbsp; <button onClick={() => {this.showDetail2(m.id)}} >replace()查看</button>
              </li>
            ))
          }
        </ul>
        <p>
          <button onClick={this.back} >回退</button>
          <button onClick={this.forward} >前进</button>
        </p>
        <p>
          <button onClick={this.turnOn} >跳转界面</button>
        </p>
        {/* :id既是占位符，也是参数 */}
        <Route path='/home/message/messagedetail/:id' component={MessageDetail} />
      </div>
    )
  }
}

