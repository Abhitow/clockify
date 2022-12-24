import axios from 'axios';
import React,{useEffect, useState} from 'react'
import DashboardCard from './Card';
import {Card ,Row ,Col, Divider,Button} from 'antd'
import {EditOutlined, UserOutlined} from '@ant-design/icons'
import KebabMenu from './KebabMenu';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';


const baseURL = "http://demo.emeetify.com:8080/daytodaytask/admin/getAllUser";

const Dashboard =() =>{
    const [post , setPost]= useState([]);
    const fecthData = () =>{
         axios.get(baseURL ).then((response) => setPost(response.data.data));
    }
    useEffect( ()=>{
        fecthData();
        }, []);
    // useEffect( ()=> {
    //     if(data!==undefined){
    //         console.log("=====>",data)
    //     }
    //     console.log(data + "got")
    
    // },[data]);


    const handleOnclick = ()=>{
        console.log("tets")
    }
    
    if(!post) return null
    return(
        <div>
            <div >
                <Row > 
            {post.map(
                    (data )=>
                    {return (
                        <div style={{marginRight:'40px' ,marginLeft:'10px'}}>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front'>
                                        <Col >
                                            <Card  className='dashboard-card' title={data.user_id}>
                                                    {<UserOutlined className='user-icon'/>}
                                                    <h1 key={data.full_name}>{data.full_name}</h1>
                                                    <h4 key={data.designation} >Designation :  {data.designation}</h4>
                                                    <h1 key={data.user_company} style={{wordSpacing:'2px',letterSpacing:'2px',paddingBottom:'10px'}}>{data.user_company}</h1>
                                                   
                                            </Card>
                                        </Col>      
                                </div>
                                <div className='flip-card-back'>
                                <Card className='dashboard-card' title='Employee Details' >
                                    <Row >                                    
                                    <Col span={20}>
                                                <h4 key={data.work_experience}>Experience :- {data.work_experience}</h4>
                                                <h1>Phone : {data.mobile_no}</h1>
                                                <h4 style={{textAlign:'center' ,marginLeft:'22px'}}>Email : {data.email}</h4>
                                    </Col>
                                    </Row>
                                            </Card>
                                </div>
                            </div>
                        </div>
                       
                        </div>
                        )})}
                    
                     </Row>
            </div>
           
        </div>
    )    
}
export default Dashboard