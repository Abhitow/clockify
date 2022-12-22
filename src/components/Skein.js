import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import React from 'react'


const items = [
    {
    key:'1' ,
    label:(<a href='https://www.google.com'>Skein Project</a>)
    },
    {
        key:'2' ,
    label:(<a href='https://www.google.com'>Work Space</a>)
    }
]
const Skein = () =>{
    return(
        <div>
            <Dropdown menu={{items}}>
                <Space>Skein Projects <DownOutlined /></Space>
            </Dropdown>
        </div>
    )
}
export default Skein