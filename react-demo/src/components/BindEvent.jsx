import React from 'react'

export default class BindEvent extends React.Component{
  constructor() {
    super()
    // 私有数据
    this.state = {
      msg: '123'
    }
  }

  render() {
    return <div>
      BindEvent 组件
      {/* react中的事件绑定机制，名称使用的是 小驼峰命名法 */}
      {/* <button onClick={function () {
        alert('提交成功！！！')
      }}>提交</button> */}
      {/* <button onClick={this.myclickHandler}>提交</button> */}

      {/* react中 onClick 默认接受一个 函数对象(只接受 function 作为处理函数) */}
      <button onClick={() => this.myclickHandler()}>提交</button>
      <button onClick={() => {this.show("🐖", "🍕")}}>点击调用show方法</button>
      {/* <input type="text" value={this.state.msg} onChange={()=>this.showMsg()} ref="txt" /> */}
      <input type="text" value={this.state.msg} onChange={(e)=>this.showMsg(e)}  />
      {/* 修改数据 */}
    <h1>{this.state.msg}</h1>
    </div>
  } 

  myclickHandler(){
    alert('提交成功，完美，哈哈哈！！！')
  }

  showMsg(e){
    // const newVal = this.refs.txt.value
    const newVal = e.target.value
    // alert('文本框')
    // alert(this.state.msg)
    this.setState({
      msg: newVal
    })
  }

  show = (param1, param2) => {
    console.log("show方法被调用了"+param1+param2);

    /* 在React中 若想要修改state中的数据，不能直接通过this.state.***赋值
      而应该 调用 React 提供的 this.setState({msg: '123'})
    */
  //  this.state.msg = 'reset'

   this.setState({
     msg: '1234' + param1 + param2
   })

  }

}