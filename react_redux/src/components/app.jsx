import React, { Component } from "react";

export default class App extends Component {


  state = {
    count: 0
  }

  increment = () => {
    // 1、得到选择 增加数量
    const number = this.select.value*1
    // 2、得到原本的count状态，并计算新的count
    const count = this.state.count + number
    // 3、更新状态
    this.setState({count})
  }

  render () {
    const {count} = this.state
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select => this.select = select} >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
          <button>-</button>&nbsp;
          <button>increment if odd</button>&nbsp;
          <button>increment async</button>
        </div>
      </div>
    )
  }
}