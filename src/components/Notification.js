import React from 'react'
import { BellOutlined } from '@ant-design/icons'
import { Anchor } from 'antd'
import Link from 'antd/es/typography/Link'

const Notification = () =>{
    return(
    <div>
       <Anchor showInkInFixed={false} affix={false}>
                <Link><BellOutlined className='header-notification-icon'/></Link>
            </Anchor>
    </div>
    )
}
export default Notification