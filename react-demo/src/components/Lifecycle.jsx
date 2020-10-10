import React from 'react'
import ReactDOM from 'react-dom'

/*
  需求：自定义组件
    1、让指定的文本做显示/隐藏的动画
    2、切换时间为2s
    3、点击按钮从界面移除组件界面
*/
export default class Life extends React.Component {

  constructor (props) {
    super (props)

    // 初始化数据状态
    this.state = {
      opacity: 1,
    }

    this.distroyComponent = this.distroyComponent.bind(this)
  }

  distroyComponent () {
    ReactDOM.unmountComponentAtNode(document.getElementById("app"))
  }

// 定义了，没调用，最终执行了
  componentDidMount () {
    // 启动循环定时器
    this.intervalId = setInterval(() => {
      console.log("执行了");
      let {opacity} = this.state
      opacity -= 0.1
      if (opacity <= 0) {
        opacity = 1
      }
      // 更新状态
      this.setState({opacity})
    }, 200);
  }

  componentWillUnmount () {
    // 清理定时器
    clearInterval(this.intervalId)
  }

  render () {
    const {opacity} = this.state
    return (
      <div>
        <h2 style={{opacity}}>{this.props.msg}</h2>
        <button onClick={this.distroyComponent}>不活了</button>
      </div>
    )
  }
}