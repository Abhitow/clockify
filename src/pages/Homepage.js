import { Layout } from 'antd'
import React,{useState} from 'react'
import SideNavigation from '../components/SideNavigation'
import HomeHeader from '../components/Header'
import HomeContent from '../components/Content'
import {MenuFoldOutlined , MenuUnfoldOutlined} from '@ant-design/icons'
import { Route, Routes } from 'react-router'
import Dashboard from '../components/Dashboard'
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
                    <Content><HomeContent />
                    </Content>
                </Layout>
            </Layout>
            
        </div>
    )
}
export default Homepage