![page](http://www.zzfang.top/blog-img/page.png)
### 1、项目使用 create-react-app 脚手架工具
### 2、安装使用：
``` 
npm install
```
### 运行项目:
```
yarn start  或者 npm run start
```
### 上线打包：
```
yarn build 或者 npm run build
``` 
### 3、项目目录结构
```
/config         配置文件(webpack)
/public           index.html
/scripts          运行脚本文件
/src                主目录
/.gitignore   
/README.md
/yarn.lock
```
### src目录下的
```
src
  /api                         axios封装
  /common               通用组件文件夹
    Header                头部组件
    Nav                     导航栏组件（包含路由）
    Side                    个人信息组件
  /pages                    页面组件文件夹
    Detail                  文章详情页面
    List                      文章列表页（包含主要的路由页面）
  /static                      静态文件
  /style                       初始化样式表
    common.less                
  /App.js                  
  /App.module.less                  
  /index.js  
```
### 4、后台接口使用 axios 发送请求
### 5、项目使用less(react脚手架默认只支持sass，less需要手动配置)，为了使组件样式不互相影响使用style.module.less的模式
### 将样式文件名中间添加一个module
```
引入
import Styles from './style.module.less'
使用
      < div className={Styles['header-searchInput']} >
将渲染成
class='header-searchInput'
```
### 6、项目使用 marked 和 highlight.js 解析markdown格式文件，将后台返回的字符串解析为html并渲染到页面
![page](http://www.zzfang.top/blog-img/mdExample.png)
### [marked地址](https://github.com/markedjs/marked)
### [highlight.js地址](https://github.com/highlightjs/highlight.js)
### 7、引入 antd 为ui组件,具体其他配置参考文档
### [antd官方文档](https://ant.design/index-cn)
### 项目地址：


