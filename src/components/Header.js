import { Row , Col } from 'antd'
import React from 'react' 
import Help from './Help'
import Newuser from './NewUser'
import Notification from './Notification'
import Profile from './Profile'
import Skein from './Skein'

const HomeHeader =() =>{
    return(
        <div>
            <Row>
                <Col span={8} className='header-task-management'> Task Management</Col>
                <Col span={3} className='header-skein-projects'> <Skein /></Col>
                <Col span={3} className='header-skein-projects'> <Newuser /></Col>
                <Col span={4} className='header-help' > <Help /></Col>
                <Col span={2} className='header-notification'><Notification /></Col>
                <Col span={2} >< Profile /></Col>
            </Row>
        </div>
    )
}
export default HomeHeader