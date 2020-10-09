import React from 'react'

export default function Hello(props) {
  // 如果 在一个组件中 return 一个 null 则表示此组件是空的 不会渲染任何内容
  // return null
  // 在组件中 必须返回一个 合法的JSX虚拟的DOM元素
  // props.name = 'nan'
  // 不论是vue还是react，组件中的props永远都是只读的，不能被再次赋值
  console.log(props);
  return <div>this is a dog name:{props.name}, age:{props.age}, gender:{props.gender}</div>
}

// 把组件暴露出去
// export default Hello