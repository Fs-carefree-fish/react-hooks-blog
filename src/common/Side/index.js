import React, { useContext } from 'react'
import Styles from './style.module.less'
import { Card, Icon, Popover } from 'antd'

import { Context } from '../../App'
import pageImg from '../../static/image/page.jpg'
import avatarImg from '../../static/image/avatar.jpg'


const { Meta } = Card
const Slide = () => {

  // 从 App 组件接收 fixed
  const { fixed } = useContext(Context)
  // console.log(fixed)
  const getPopoverContent = (type) => {
    switch (type) {
      case 'github': return <div>github</div>
      case 'qq': return <div><p>723136370</p></div>
      case 'message': return <div><p>723136370@qq.com</p></div>
      default: return <></>
    }
  }

  return (
    <div className={Styles['side-wrap']} style={fixed ? { top: 180 } : { top: 240 }}>
      <Card
        hoverable={true}
        style={{}}
        cover={
          <img
            alt="page"
            src={pageImg}
          />
        }
        actions={[
          <Popover content={getPopoverContent("github")} title='github'>
            <Icon type="github" key="setting" />
          </Popover>,
          <Popover content={getPopoverContent("qq")} title='QQ' >
            <Icon type="qq" key="edit" />
          </Popover>,
          <Popover content={getPopoverContent("message")} title='邮箱' >
            <Icon type="message" key="ellipsis" />
          </Popover>,
        ]}
      >
        <Meta
          avatar={
            <img
              alt="avatat"
              src={avatarImg}
              className={Styles['side-avatar']}
            />}
          title="假闲鱼"
          description="热爱技术，热爱前端，学习..."
        />
      </Card>
    </div >
  )

}

export default Slide










