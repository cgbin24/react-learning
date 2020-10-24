##### 小程序缓存token至全局

> 1)	在对应文件中导入 app
>
> > 如：
> >
> > ```js
> > const app = getApp()
> > ```

> 2)	登录
>
> > 如：
> >
> > ```js
> > // 登录
> > wx.login({
> >   success (res) {
> >     // 发送 res.code 到后台获取 openid, sessionkey, unionid
> >     //发起网络请求
> >     const code = res.code
> >     WXAPI.login({
> >       code
> >     }).then(res => {
> >       
> >       if (res.code === 0) {
> >         // 保存token至全局
> >         app.globalData.token = res.data.token;//拿到后将token存入全局变量  以便其他页面使用
> >         // 成功之后进入申请页
> >         wx.redirectTo({
> >           url: '../apply/apply'  
> >         })
> >       }
> >     })
> >   }
> > })
> > ```

> 3)	引用
>
> > 如：
> >
> > ```js
> > const app = getApp()
> > ```
> >
> > 
> >
> > ```js
> > header:{
> > 	Authorization: app.globalData.token
> > },
> > ```
> >
> > 