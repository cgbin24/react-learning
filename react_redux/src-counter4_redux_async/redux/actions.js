/*
  包含所有的 action creator
  同步的action返回一个对象
  异步的action返回一个函数
 */

import { INCREMENT, DECREMENT } from "./action-type";

//  增加
export const increment = (number) => ({type: INCREMENT, data: number})
// 减少
export const decrement = (number) => ({type: DECREMENT, data: number})
// 异步action
export const incrementAsync = (number) => {
  return dispatch => {
    // 异步的代码
    setTimeout(() => {
      // 1s之后去分发一个增加的action
      dispatch(increment(number))
    }, 1000);
  }
}