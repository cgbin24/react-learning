// 1、导入包
import React from 'react'
import ReactDOM from 'react-dom'

// import '@/09.class-继承-公共方法'

// class 关键字 方式创建组件
class Movie extends React.Component{

  constructor() {
    // 由于Movie组件继承了React.Component这个父类，所以在自定义的构造器中必须要调用 super
    super()
    // 只有调用了super() 之后才能使用this关键字
    this.state = {  // 这个this.state ={} 就相当于vue中的 data(){return}
      msg: "这是由class创建的组件"
    }
  }



  // render的作用：渲染虚拟DOM结构
  render() {
    // return null
    // 在class关键字创建的组件中，如果想要使用外界传来的 props 参数，不需要接收，直接通过 this.props.***访问即可
      // 不论是class还是function创建的组件，其中的props都是只读的
    return <div>
      {/* 注意：class类中的this 指的都是 当前组件的实例对象 */}
      这是Movie组件---{this.props.name}------{this.props.age}-----{this.props.gender}
      <hr/>
      {this.state.msg}
    </div>
  }
}

const user = {
  name: 'zs',
  age: 20,
  gender: '男'
}


// 3、调用 render 函数渲染
ReactDOM.render(<div>
 123
 {/* 这里的Movie标签，其实就是 Movie类 的一个实例对象 */}
 <Movie {...user}></Movie>
</div>, document.getElementById('app'))


