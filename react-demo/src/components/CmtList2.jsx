import React from 'react'

import CmtItem from '@/components/CmtItem2'

// 导入bootstrap
// import bootcss from 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'

// 导入css样式文件
// 默认在全局上，整个项目中都生效
import cssobj from '@/css/cmtlist.scss'
console.log(cssobj);


// 使用class关键字，定义一个父组件
export default class CmtList extends React.Component{
  constructor() {
    super()
    this.state = {
      CommentList: [  // 评论列表数据
        { id: 1, user: '张三', content: '哈哈，沙发'},
        { id: 2, user: '李四', content: '哈哈，板凳'},
        { id: 3, user: '王五', content: '哈哈，椅子'},
        { id: 4, user: '赵六', content: '哈哈，砖头'},
        { id: 5, user: '田七', content: '哈哈，柜子'},

      ]
    }
  }

  render() {
    return <div>
      {/* 在JSX中书写样式 语法为 style={ { color: 'red'} } */}
      {/* <h1 style={{color: 'red', fontSize: '30px', fontWeight: 200, textAlign: 'center'}}>这是评论列表组件</h1> */}

      <h1 className={[cssobj.title, "test"].join(" ")}>这是评论列表组件</h1>
      {/* <button className={[bootcss.btn, bootcss['btn-primary']]  .join(" ")}>提交</button> */}
      <button className="btn btn-primary">提交</button>

      <div className="panel panel-primary"></div>

      {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
    </div>
  }
}
