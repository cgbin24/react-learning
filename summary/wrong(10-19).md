###### npm start启动时

![image-20201019103351428](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201019103351428.png)

```
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! react_redux@0.1.0 start: `react-scripts start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the react_redux@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\qifom\AppData\Roaming\npm-cache\_logs\2020-10-19T02_31_07_142Z-debug.log
```

###### 解决

>  cnpm i

> npm start

![image-20201019103828858](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201019103828858.png)

```
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! react_redux@0.1.0 start: `react-scripts start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the react_redux@0.1.0 start script.
Failed to compile.

./src/redux/reducers.js
  Line 15:57:  'actoin' is not defined  no-undef       

Search for the keywords to learn more about each error.
```

![image-20201019103918219](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201019103918219.png)

###### 重新检查

![image-20201019103959015](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201019103959015.png)

![image-20201019104112060](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201019104112060.png)

![image-20201019104125763](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201019104125763.png)

![image-20201019104200048](C:\Users\qifom\AppData\Roaming\Typora\typora-user-images\image-20201019104200048.png)

###### complete……