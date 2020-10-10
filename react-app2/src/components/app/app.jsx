import React, {Component} from 'react'

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
          <CommentAdd />
          <CommentList comments={comments}/>
          {/* {alert(JSON.stringify(comments))} */}
        </div>
      </div>
    )
  }
}