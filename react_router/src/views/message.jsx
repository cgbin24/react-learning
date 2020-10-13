import React, { Component } from 'react'

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
        {id: 2, title: 'message001'},
        {id: 3, title: 'message001'},
      ]
      // 更新状态
      this.setState({messages})
    }, 1000);
  }

  render () {

    return (
      <ul>
        {
          this.state.messages.map((m, index) => (
            <li  key={index} > 
              <a href="???" > {m.title} </a>
            </li>
            ))
        }
      </ul>
    )
  }
}

