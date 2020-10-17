import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }

  increment = () => {
    // 1、得到选择 增加数量
    const number = this.select.value*1

    // 2、调用store的方法更新状态
    this.props.increment(number)
  }
  decrement = () => {
    // 1、得到选择 增加数量
    const number = this.select.value*1

    // 2、调用store的方法更新状态
    this.props.decrement(number)
  }
  incrementIfOdd = () => {
    // 1、得到选择 增加数量
    const number = this.select.value*1
    // 2、得到原本的count状态
    const count = this.props.count
    // 判断 满足条件才更新状态
    if (count%2===1) {
      // 3、调用store的方法更新状态
      this.props.increment(number)
    }
  }
  incrementAsync = () => {
    // 1、得到选择 增加数量
    const number = this.select.value*1
    // 处理异步
    this.props.incrementAsync(number)
  }

  

  render () {
    // const {count} = this.state  // 未使用redux
    const {count} = this.props // use react-redux
    // debugger
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
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    )
  }
}
