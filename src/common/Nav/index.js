import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../App'
import { Tabs, Icon } from 'antd'

import List from '../../pages/List'
import Detail from '../../pages/Detail'

import Styles from './style.module.less'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { _getTypeInfo, _getArticleList } from '../../api'

const { TabPane } = Tabs

const Nav = (props) => {

  const { history } = props
  //console.log('nav')

  // nav 是否 fixed 的状态变量 
  // let [isFixed, setIsFixed] = useState(false)
  // 文章变量
  let [typeArr, setTypeArr] = useState([])
  // 文章列表
  let [articleList, setArticle] = useState([])

  // 从 App 组件接收 fixed
  const { fixed } = useContext(Context)
  //console.log(fixed)

  // 滚动事件
  // const scrollEvent = () => {
  //   let heightTop = document.documentElement.scrollTop || document.body.scrollTop
  //   //console.log(heightTop)
  //   if (heightTop >= 100) {
  //     setIsFixed(true)
  //   } else {
  //     setIsFixed(false)
  //   }
  // }

  // 导航栏跳转
  const handleNav = (activeKey) => {
    //console.log(activeKey)
    const { pathname } = props.location
    //console.log(pathname)
    const patt = /detail/
    patt.test(pathname) && history.push('/')
  }

  // 对 antd tab 组件的重新封装
  const renderTabBar = (props, DefaultTabBar) => {
    const fixedStyle = fixed ?
      {
        top: '80px',
        position: 'fixed',
        zIndex: '10000',
        width: '100%',
        background: '#fff',
        textAlign: 'center'
      }
      : {
        marginBottom: '0',
        background: '#fff',
        textAlign: 'center'
      }
    return <DefaultTabBar {...props} style={fixedStyle} />
  }

  // 对文章分类
  const getArticleArr = (type) => {
    let articleArr = []
    articleList.forEach((item) => {
      item.typeName === type && articleArr.push(item)
    })
    // console.log(articleArr)
    return articleArr
  }

  // 获取文章类别
  async function getTypeInfo() {
    const res = await _getTypeInfo()
    setTypeArr(res.data.data)
    //console.log(res.data.data)
  }

  // 获取全部文章列表
  async function getArticleList() {
    const res = await _getArticleList()
    setArticle(res.data.data)
  }


  useEffect(() => {
    getArticleList()
    getTypeInfo()
    // window.addEventListener('scroll', scrollEvent)
    return () => {
      // window.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  return (

    <div className={Styles['nav-wrap']}>
      <Router>
        <Tabs
          size="large"
          defaultActiveKey="1"
          tabBarGutter={10}
          renderTabBar={renderTabBar}
          onTabClick={handleNav}
        >
          {typeArr.map((item, id) => {

            return (
              <TabPane
                tab={<span><Icon type={item.icon} />{item.typeName}</span>}
                tabBarGutter={20}
                key={item.Id}
              >
                <Switch>
                  <Route path="/" exact>
                    <List
                      {...props}
                      list={id === 0 ? articleList : getArticleArr(item.typeName)} />
                  </Route>
                  <Route path="/detail/:id" exact component={Detail} />
                </Switch>
              </TabPane>
            )
          })}
        </Tabs>
      </Router>
    </div >
  )
}

export default Nav





