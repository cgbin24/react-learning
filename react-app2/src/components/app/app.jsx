import React, {Component} from 'react'
import PubSub from 'pubsub-js'

import CommentAdd from '../component-add/component-add'
import CommentList from '../component-list/component-list'

export default class App extends Component {

  // constructor (props) {
  //   super (props)

  //   this.state = {
  //     comments: [
  //       {username: 'Tom', content: 'React还不错！'},
  //       {username: 'Jacky', content: 'React挺难的！'},
  //     ]
  //   }
  // }

  // 给组件对象指定state属性
  state = {
    comments: [
      {username: 'Tom', content: 'React还不错！'},
      {username: 'Jacky', content: 'React挺难的！'},
    ]
  }

  componentDidMount () {
    // 订阅消息（deleteComment）
    PubSub.subscribe('deleteComment', (msg, index) => {
      this.deleteComment(index)
    })


  }

  // 状态在哪里，操作就在那里
  // 添加评论
  addComment = (comment) => {
    const {comments} = this.state
    // alert(JSON.stringify(comment))
    // debugger
    // alert(123)
    if (comment.username === null || comment.content === null) {
    }
    comments.unshift(comment)
    // 更新状态
    this.setState({comments})
  }

  // 删除指定评论
  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index,1)
    // update state
    this.setState({comments})
  }

  render () {
    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.addComment} />
          {/* <CommentList comments={comments} deleteComment={this.deleteComment}/> */}
          <CommentList comments={comments}/>
          {/* {alert(JSON.stringify(comments))} */}
        </div>
      </div>
    )
  }
}