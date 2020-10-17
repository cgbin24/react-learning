import React, { Component } from "react";
// import { INCREMENT, DECREMENT } from "../redux/action-type";
import * as actions from "../redux/actions";

export default class App extends Component {

  // 使用reedux保存状态后就可以不在指定state，相应的更新状态也需要重新指定
  // state = {
  //   count: 0
  // }

  increment = () => {
    // 1、得到选择 增加数量
    const number = this.select.value*1
    // 2、得到原本的count状态
    // const count = this.state.count
    // 3、更新状态
    // this.setState({count: count + number})

    // 2、调用store的方法更新状态
    // this.props.store.dispatch({type: INCREMENT, data: number})
    this.props.store.dispatch(actions.increment(number))
  }
  decrement = () => {
    // 1、得到选择 增加数量
    const number = this.select.value*1
    // 2、得到原本的count状态
    // const count = this.state.count
    // 3、更新状态
    // this.setState({count: count - number})

    // 2、调用store的方法更新状态
    // this.props.store.dispatch({type: DECREMENT, data: number})
    this.props.store.dispatch(actions.decrement(number))
  }
  incrementIfOdd = () => {
    // 1、得到选择 增加数量
    const number = this.select.value*1
    // 2、得到原本的count状态
    // const count = this.state.count
    // // 判断 满足条件才更新状态
    // if (count%2===1) {
    //   // 3、更新状态
    //   this.setState({count: count + number})
    // }
    const count = this.props.store.getState()
    // 判断 满足条件才更新状态
    if (count%2===1) {
      // 3、调用store的方法更新状态
      // this.props.store.dispatch({type: INCREMENT, data: number})
      this.props.store.dispatch(actions.increment(number))
    }
  }
  incrementAsync = () => {
    // 1、得到选择 增加数量
    const number = this.select.value*1
    // // 2、得到原本的count状态
    // const count = this.state.count
    // // 启动延时定时器
    // setTimeout(() => {
    //   // 3、更新状态
    //   this.setState({count: count + number})
    // }, 1000);
    
    // 启动延时定时器
    setTimeout(() => {
      // 3、调用store的方法更新状态
    // this.props.store.dispatch({type: INCREMENT, data: number})
    this.props.store.dispatch(actions.increment(number))
    }, 1000);
  }

  

  render () {
    // const {count} = this.state  // 未使用redux
    const count = this.props.store.getState() // use redux
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