后端传过来的动态数据列表

#### 原始数据

![image-20201023133525788](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201023133525788.png)

#### 期望效果

![image-20201023133547927](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201023133547927.png)

#### 具体实现

##### wxml

![image-20201023133639059](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201023133639059.png)

##### js

###### 获取应用实例和自定义api

![image-20201023133943052](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201023133943052.png)

###### 定义data数据

![image-20201023133750537](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201023133750537.png)

###### 请求接口 渲染（更新data）

![image-20201023133853637](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201023133853637.png)