import { Layout } from 'antd'
import React,{useState} from 'react'
import SideNavigation from '../components/SideNavigation'
import HomeHeader from '../components/Header'
import HomeContent from '../components/Content'
import {MenuFoldOutlined , MenuUnfoldOutlined} from '@ant-design/icons'
import { Route, Routes } from 'react-router'
import Dashboard from '../components/Dashboard'
import Timesheet from './Timesheet'
import TimeTracker from './TimeTracker'
import Team from './Team'
import Reports from './Reports'
import Project from './Project'
import HomeCalendar from './Calendar'
const {Header ,Sider , Content} =Layout ;


const Homepage =() =>{
      const [collapsed , setCollapsed] =useState(false);

    return (
        
        <div className='home-container' span>
            <Layout className='home-layout'  >
            
            <Sider className='sider' theme='light' trigger={null} collapsible collapsed={collapsed}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined ,{
                className:'trigger' ,
                onClick:() => setCollapsed(!collapsed)
            })}
                <SideNavigation /></Sider>
                <Layout>
                <Header className='layout-header'><HomeHeader /></Header>
                    <Content className='layout-content'>
                        <Routes>
                            <Route path='/dashboard' element={<Dashboard />}></Route>
                            <Route path='/timesheet' element={<Timesheet />}>Timesheet</Route>
                            <Route path='/timetracker' element={<TimeTracker/>}></Route>
                            <Route path='/calendar' element={<HomeCalendar />}></Route>
                            <Route path='/team' element={<Team />}></Route>
                            <Route path='/reports' element={<Reports/>}></Route>
                            <Route path='/project' element={<Project/>}></Route>
                        </Routes>
                    </Content>
                   
                </Layout>
            </Layout>
            
        </div>
    )
}
export default Homepage