import { Dropdown, Space, Switch } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import Logout from './Logout'
import HomeSwitch from './HomeSwicth'

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
        label: <HomeSwitch />
        // Element: <HomeSwitch />

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
        label:<Logout />
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