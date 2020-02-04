import React, { useMemo } from 'react'
import Styles from './style.module.less'
import { Card } from 'antd'

import marked from 'marked'
// 处理代码高亮显示
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';


const { Meta } = Card
const List = (props) => {

  const { list } = props
  const { history } = props
  const handleMore = (id) => {
    history.push('/detail/' + id)
  }

  // marked 配置
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  })

  // 防止 List 组件重复渲染
  let getList = useMemo(() => {
    //console.log('getList')
    return (
      <div className={Styles['list-wrap']}>

        <div className={Styles['list-left']}>
          {
            list.map((item) => {
              let html = marked(item.introduce)
              return (
                <Card
                  title={item.title}
                  headStyle={{
                    fontSize: 20,
                    fontWeight: 'bold'
                  }}
                  extra={
                    <span
                      className={Styles['list-more']}
                      onClick={() => { handleMore(item.id) }}>
                      查看更多</span>}
                  key={item.id}
                  hoverable={true}
                  style={{
                    marginLeft: 80,
                    marginTop: 30,
                    width: 800
                  }}
                >
                  <Meta
                    description={item.addTime}
                    style={{ marginBottom: 20 }}
                  />
                  <p dangerouslySetInnerHTML={{ __html: html }}>
                    {/* {item.introduce} */}
                  </p>
                </Card>
              )
            })
          }
        </div>
      </div >
    )
  }, [list])

  return <>{getList}</>
}

export default List





