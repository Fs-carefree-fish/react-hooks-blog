import React, { useState, useEffect, createContext } from 'react';
import Styles from './App.module.less'

import Header from './common/Header'
import Nav from './common/Nav'
import Side from './common/Side'


import { Route, HashRouter as Router, } from 'react-router-dom'

export const Context = createContext()

const App = () => {

  // nav 是否 fixed 的状态变量 
  let [fixed, setFixed] = useState(false)
  //滚动事件
  const scrollEvent = () => {
    let heightTop = document.documentElement.scrollTop || document.body.scrollTop
    //console.log(heightTop)
    if (heightTop >= 100) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollEvent)
    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  return (
    <div className={Styles.App}>
      <div className={Styles['app-bg']}></div>
      <Header />
      <Context.Provider
        value={{
          fixed: fixed,
        }}>
        <Router>
          <Route path="/" component={Nav} />
        </Router>
        <Side />
      </Context.Provider>
    </div >
  )
}

export default App



