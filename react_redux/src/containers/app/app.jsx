import React, {Component} from 'react'
import PubSub from 'pubsub-js'
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CommentAdd from '../../components/component-add/component-add'
import CommentList from '../../components/component-list/component-list'
import {addComment, deleteComment} from "../../redux/actions";

class App extends Component {

  // 给组件对象指定state属性
  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
  }

  componentDidMount () {\
    const {deleteComment} = this.props
    // 订阅消息（deleteComment）
    PubSub.subscribe('deleteComment', (msg, index) => {
      deleteComment(index)
    })



  }


  render () {
    const {comments, addComment} = this.props
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
          <CommentAdd addComment={addComment} />
          <CommentList comments={comments}/>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({comments: state}), // state就是一个comments数组
  {addComment, deleteComment}
)(App)
