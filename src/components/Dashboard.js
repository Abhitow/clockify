import axios from 'axios';
import React,{useEffect, useState} from 'react'
import DashboardCard from './Card';
import {Card ,Row ,Col} from 'antd'


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
    
    if(!post) return null
    return(
        <div>
            <h1>List of Users</h1> 
            <div >
            {post.map(
                    (data )=>
                    {return (
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front'>
                                        <Col span={6}>
                                            <Card  className='dashboard-card' title={data.user_id}>
                                                    <li>{data.full_name}</li>
                                                    <li>{data.designation}</li>
                                                    <li>{data.work_experience}</li>
                                            </Card>
                                        </Col>      
                                </div>
                                <div className='flip-card-back'>
                                <Card className='dashboard-card'>
                                                <h1>{data.user_company}</h1>
                                            </Card>
                                </div>
                            </div>
                        </div>
                        // <li key={data.user_id}>
                        //     <p>{data[0]}</p> 
                        // </li>
                    )})}
            </div>
        </div>
    )    
}
export default Dashboard