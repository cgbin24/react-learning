##### 使用ant design react(react_ui) 时按需导入样式组件

`npm i react-app-rewired babel-plugin-import --save-dev`



###### 1、下载依赖包

`npm install react-app-rewired customize-cra --save-dev`

`npm install babel-plugin-import --save-dev`

###### 2、修改默认配置

```json
 "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom"
  },
```

###### 3、添加`config-overrides.js`文件

```js
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
);
```

###### 4、注释（将原引入文件去掉）

<img src="C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201015162713794.png" alt="image-20201015162713794" style="zoom:80%;" />

<img src="C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201015162835951.png" alt="image-20201015162835951" style="zoom:63%;" />

###### 5、效果

<img src="C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201015163127759.png" alt="image-20201015163127759" style="zoom:90%;" />