import React, { useState, useEffect } from 'react';
import Styles from './style.module.less'
import { Card, Icon } from 'antd';
import { _getArticleById } from '../../api'

import marked from 'marked'
// 处理代码高亮显示
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

const { Meta } = Card;

const Detail = (props) => {
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

  const { id } = props.match.params
  const [detail, setDetail] = useState({})

  // 获取文章
  async function getArticleById(articleId) {
    const res = await _getArticleById(articleId)
    setDetail(res.data.data[0])
  }

  useEffect(() => {
    getArticleById(id)
  }, [id])



  const { title, addTime, article_content, view_count } = detail
  const html = article_content && marked(article_content)
  console.log(html)
  let getDetial = () => {
    // console.log('return')
    return (
      <div className={Styles['list-wrap']}>
        <div className={Styles['list-left']}>
          <Card
            title={title}
            // extra={<a href="#">查看更多</a>}
            extra={<span><Icon type='smile' />  {view_count}</span>}
            hoverable={true}
            style={{
              marginLeft: 80,
              marginTop: 30,
              width: 800,
              padding: 20
            }}
          >
            <Meta
              description={addTime}
              style={{ marginBottom: 20 }}
            />
            <p dangerouslySetInnerHTML={{ __html: html }}>
              {/* {article_content} */}
            </p>
          </Card>
        </div>
      </div>
    )
  }
  return <>{getDetial()}</>
}

export default Detail





