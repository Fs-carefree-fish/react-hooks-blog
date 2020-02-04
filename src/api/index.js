import axios from 'axios'

//创建一个 axios 实例
//指定的配置将与实例的配置合并
const http = axios.create({
  //服务器地址
  baseURL: 'your-url-path',
  //超时时间
  timeout: 5000,
})

//首页列表（全部文章）
export function _getArticleList() {
  return http.get('/yoururl')
    .then(data => {
      //可以使用 await 异步方式接收
      return Promise.resolve(data)
    }).catch(
      err => {
        console.log("后台连接失败")
        return Promise.reject(err)
      }
    )
}


//获取所有分类
export function _getTypeInfo() {
  return http.get('/yoururl')
    .then(data => {
      //可以使用 await 异步方式接收
      return Promise.resolve(data)
    }).catch(
      err => {
        return Promise.reject(err)
      }
    )
}

//根据文章类别获取文章列表
export function _getListById(id) {
  return http.get('/yoururl' + id)
    .then(data => {
      //可以使用 await 异步方式接收
      return Promise.resolve(data)
    }).catch(
      err => {
        return Promise.reject(err)
      }
    )
}

//根据id获取详细页
export function _getArticleById(id) {
  return http.get('/yoururl' + id)
    .then(data => {
      //可以使用 await 异步方式接收
      return Promise.resolve(data)
    }).catch(
      err => {
        return Promise.reject(err)
      }
    )
}
