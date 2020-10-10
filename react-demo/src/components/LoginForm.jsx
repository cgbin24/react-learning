import React from 'react'


/*
 表单的组件分类：
  受控组件：表单项输入数据能自动收集成状态
    如：<input type="password" value={this.state.pwd} onChange={this.handleChange} />
  非受控组件：需要时才手动读取表单输入框中的数据
    如：<input type="text" ref={input => this.nameInput = input} />
 */

export default class LoginForm extends React.Component{

  constructor (props) {
    super (props)

    this.state = {
      pwd: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {

    const name = this.nameInput.value
    const {pwd} = this.state
    alert(`提交的用户名为${name},密码为${pwd}`)
    // 阻止事件默认行为(提交)
    event.preventDefault()
  }

  handleChange (event) {
    // 读取输入的值
    const pwd = event.target.value
    // 更新pwd的状态
    this.setState({pwd})

  }

  render() {
    return (
      <form action="/test" onSubmit={this.handleSubmit}>
        用户名：<input type="text" ref={input => this.nameInput = input} />
        密码：<input type="password" value={this.state.pwd} onChange={this.handleChange} />
        <input type="submit" value="提交" />
      </form>
    )
  }
}
