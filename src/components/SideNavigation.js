import React  from 'react'
import { Menu, Row ,Col} from 'antd' 
import {useNavigate} from 'react-router-dom'
import {DashboardOutlined,
        FieldTimeOutlined,
        CalendarOutlined ,
        ClockCircleOutlined ,
        TeamOutlined ,
        FileOutlined ,
        FileDoneOutlined} from '@ant-design/icons'




const SideNavigation = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <Row><Col span={24} style={{textAlign:'center'}}><h1>Admin</h1></Col></Row>
            
                <Menu 
                    onClick={({key})=>{
                        if( key === "Logout"){
                            console.log("----->Logout Success");
                        }
                        else{
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            className:'sider-label',
                            key:'/team' ,
                            label :'Team',
                            icon: <TeamOutlined className='sider-icon'/>
                            
                            
                        },
                        {
                            className:'sider-label',
                            key:'/client' ,
                            label :'Client',
                            icon: <CalendarOutlined className='sider-icon'/>
                        },
                        {
                            className:'sider-label',
                            key:'/projects' ,
                            label :'Projects',
                            icon: <FileDoneOutlined className='sider-icon'/>
                        } ,
                        {
                            className:'sider-label',
                            key:'/task' ,
                            label :'Tasks',
                            icon: <FieldTimeOutlined className='sider-icon'/>
                        },
                        {
                            className:'sider-label',
                            key:'/calendar' ,
                            label :'Calendar',
                            icon: <CalendarOutlined className='sider-icon'/>
                        },
                        {
                            className:'sider-label',
                            key:'/reports' ,
                            label :'Reports',
                            icon: <FileOutlined className='sider-icon'/>
                        },
                        

                    ]}
                />
        </div>
    )
}
export default SideNavigation