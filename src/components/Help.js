import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Anchor } from 'antd'
import Link from 'antd/es/typography/Link'

const Help = () =>{
    return(
        <div>
            <Anchor className='help-anchor'>
                <Link><QuestionCircleOutlined className='header-help-icon'/></Link>
            </Anchor>
            
        </div>
    )
}
export default Help