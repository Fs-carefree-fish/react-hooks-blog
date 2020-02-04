import React, { useMemo } from 'react';

import Styles from './style.module.less'
import { Input } from 'antd';

const { Search } = Input;

export default function Header() {
  // 由于 App 监听了滚动事件 为减少不必要的渲染使用 useMomo
  const getSearchInput = useMemo(() => {
    // console.log('se')
    return (
      < div className={Styles['header-searchInput']} >

        <Search
          style={{ width: 300 }}
          placeholder="input search text"
          // onSearch={value => console.log(value)}
          // onPressEnter={value => console.log(value)}
          // onChange={value => console.log(value)}
          enterButton
          loading={false}
          allowClear={true} />
      </div >)
  }, [])
  return (
    <div className={Styles['header-wrap']}>
      <span className={Styles['header-name']}>
        假闲鱼的博客
      </span>
      <span className={Styles['header-introduce']}>
        热爱前端，学习技术，分享笔记  ...
      </span>
      <>{getSearchInput}</>
    </div>
  )
}
