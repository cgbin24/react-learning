const path = require('path')  
// const fs = require('fs')
const HtmlWebPackPlugin = require('html-webpack-plugin')  // 导入在内存中自动生成 index 页面的插件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname,'./src/index.html'), // 源文件
  filename: 'index.html' // 生成在内存中的首页名称
})


// 向外暴露一个打包对象 webpack是基于node构建的，因此webpack支持所有node api 和语法
// webpack 默认只能打包处理 .js 类型的文件 如：.png .vue 无法主动处理 需要配置第三方的loader
module.exports = {
  mode: 'development',  // development production
  // 约定大于配置 默认的打包入口路径是 src -> index.js
  plugins: [
    htmlPlugin  // 将上述声明的插件在此暴露
  ],
  module: {   // 所有第三方 模块 的配置规则
    rules: [  // 第三方匹配规则
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 千万别忘记添加 exclude排除项
      // 可以在 css-loader 后面 通过 ? 追加参数
      // 其中有一个固定参数为 modules  表示 为普通的 css 样式表 启用模块化
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },  // 打包处理 css 样式表第三方loader
      { test: /\.ttf|woff|woff2|eot|svg$/, use:'url-loader' },  // 打包处理 字体文件 的loader
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules', 'sass-loader'] }  // 打包处理 scss 文件的loader
    ]

  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 表示这几个 文件类型 后缀名可以省略不写
    alias: {  // 配置别名
      '@': path.join(__dirname,'./src') // 表示 使用 @ 符号 替代 ./src 根路径
    }
  }
}
