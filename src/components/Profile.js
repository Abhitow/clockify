import { Dropdown, Space } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'

const items =[
    {
        key:'1' ,
        label:'Profile'
    },
    {
        key:'2',
        label:'example@gmail.com'
    },
    {
        type: 'divider'
    } ,
    {
        key:'3',
        label:'Dark Theme'
    },
    
    {
        key:'4',
        label:'Profile Settings'
    },
    {
        type:'divider'
    } ,
    {
        key:'5',
        label:'LogOut'
    }
]
const Profile = () => {
    return(
        <div>
            <Dropdown menu={{items}}>
                <Space className='header-profile'>Profile <UserOutlined /></Space>
            </Dropdown>
        </div>
    )
}
export default Profile