import React from 'react'


const axios = require('axios')
/*
  需求：
    1、界面效果
    2、根据指定的关键字在GitHub上搜索匹配最受关注的库
    3、显示库名，点击库名查看库
    4、测试接口：https://api.github.com/search/repositories?q=r&sort=starts
*/

export default class MostStarRes extends React.Component {

  

  state = {
    repoName: '',
    repoUrl: ''
  }

  componentDidMount () {
    // 使用axios发送异步的Ajax请求
    const url = 'https://api.github.com/search/repositories?q=reac&sort=starts'
    // axios.get(url)
    // .then(response => {
    //   const result = response.data
    //   console.log(result);  
    //   // 得到数据
    //   const {name, html_url} = result.items[0]
    //   // 更新状态
    //   this.setState({repoName: name, repoUrl: html_url})
    // })
    // 使用fetch发送异步的Ajax请求
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        // 得到数据
        const {name, html_url} = data.items[0]
        // 更新状态
        this.setState({repoName: name, repoUrl: html_url})
      })
  }

  render () {
    const {repoName, repoUrl} = this.state
    if (!repoName) {
      return <h2>LOADING...</h2>
    } else {
    return <h2>Most star repo is <a href={repoUrl}>{repoName}</a></h2>
    }
    return (
      <div>
        
      </div>
    )
  }
}