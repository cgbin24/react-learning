/*
  包含了所有的action creator(action的工厂函数)
 */

 import {ADD_COMMENT, DELETE_COMMENT} from './action-types'

// 同步添加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})
// 同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

// 同步接收comments
export const 

// 异步从后台获取数据
export const getComments = () => {
  return dispatch => {
    // 模拟发送Ajax请求异步获取数据
    setTimeout(() => {
      const comments = [
        {username: 'Tom', content: 'React还不错！'},
        {username: 'Jacky', content: 'React挺难的！'},
      ]
      // 分发一个同步的action
      dispatch()
    }, 1000);
  }
}