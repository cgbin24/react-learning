import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import './commentItem.css'

export default class CommentItem extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    // deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  handleDel = () => {
    // const {comment, deleteComment, index} = this.props
    const {comment, index} = this.props
    // 提示
    if (window.confirm(`确定删除${comment.username}的评论吗？`)) {
      // 确定后删除
      // deleteComment(index)
      PubSub.publish('deleteComment', index)
    }


  }

  render () {
    const {comment} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          {/* <a href="javascript:;">删除</a> */}
          <a href="#" onClick={this.handleDel} >删除</a>
        </div>
        <p className="user"><span>{comment.username}</span><span>说：</span></p>
        <p className="centent">{comment.content}</p>
      </li>
    )
  }
}