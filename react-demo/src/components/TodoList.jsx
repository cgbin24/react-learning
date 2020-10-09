import React from 'react'

/**
 * 问题：数据保存在哪个组件内？
 *  看数据时某个组件需要（给它），或是某些组件需要（给他们共同的父类）
 * 问题2：需要在子组件中改变父组件的状态
 *  子组件中不能直接改变父组件的状态
 *  状态在哪个组件，更新状态的行为就应该定义在哪个组件内
 *  解决：父组件定义函数，传递给子组件，子组件调用
 */


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['吃饭', '睡觉', 'coding']
    }

    // this.addTodo = this.addTodo.bind(this)
    // this.addTodo = this.addTodo.bind(this)
  }

  // 需要更新的状态
  // addTodo (todo) {
  //   // this.state.todos.unshift(todo) // 不能这样做
  //   const {todos} = this.state
  //   // 添加数据
  //   todos.unshift(todo)
  //   // 更新状态
  //   this.setState({todos})
  // }

  render() {
    const {todos} = this.state
    return (
      <div>
        <h1>Simple TODO List</h1>
        {/* <Add count={todos.length} addTodo={addTodo}/> */}
        <Add count={todos.length} />
        <List todos={todos}/>

      </div>
    )
  }
}
export class Add extends React.Component {

  constructor(props) {
    super(props)

    this.add = this.add.bind(this)
  }


  add(){
    // 1、读取输入的数据
    const todo = this.todoInput.value.trim()
    // 2、检查合法性
    if (!todo) return
    // 3、添加
    this.props.addTodo(todo)
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => this.todoInput=input}/>
        <button onClick={this.add}>add #{this.props.count+1}</button>
      </div>
    )
  }
}
export class List extends React.Component {
  constructor(props) {
    super(props)
   
  }
  render() {
    const {todos} = this.props
    return (
      <div>
        <ul>
          {todos.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    )
  }
  
}

// ReactDOM.render(<App/>,document.getElementById('app'))

