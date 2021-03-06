/*
  包含n个reducer 函数（根据老的state和action返回一个新的state）
*/
import {ADD_COMMENT, DELETE_COMMENT} from './action-types'

// const initComments = [
//   {username: 'Tom', content: 'React还不错！'},
//   {username: 'Jacky', content: 'React挺难的！'},
// ]
const initComments = []
export function comments(state=initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...state]
    case DELETE_COMMENT:
      return state.filter((comment, index) => index !== action.data)
    default:
      return state
  }
}