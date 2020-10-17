###### 判断设备为Android或IOS

> 定义变量

```js
data() {
  return {
    isAndroid: false,
    isIOS: false
  }
},
```

> 定义方法

```js
// 获取当前设备类型
getUserAgent() {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('android') != -1) {
    this.isAndroid = true
  }else if (ua.indexOf('iphone') != -1) {
    this.isIOS = true
  }
}
```

