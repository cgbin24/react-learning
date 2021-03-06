import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

  // 指定类型 函数 function--func
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }


  state = {
    username: '',
    content: ''
  }
  
  // 箭头函数不用绑定 this
  handleSubmit = () => {

    // 收集数据，并封装成comment对象
    const comment = this.state
    // 判断
    if (comment.username === '' || comment.content === '') {
      alert('评论内容为空或填写不完整')
      return
    }
    // 更新状态
    this.props.addComment(comment)
    // 清除输入数据
    this.setState({
      username: '',
      content: ''
    })
    
  }

  handleNameChange = (event) => {
    const username = event.target.value
    this.setState({username})
  }

  handleContentChange = (event) => {
    const content = event.target.value
    this.setState({content})
  }



  render () {
    const {username, content} = this.state
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名称" value={username} onChange={this.handleNameChange} />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.handleContentChange}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
              
            </div>
          </div>
        </form>
      </div>
    )
  }
}