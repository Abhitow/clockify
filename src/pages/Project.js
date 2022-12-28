import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Card , Row} from 'antd'
import { UserOutlined ,
     FileOutlined , 
     FileDoneOutlined } from '@ant-design/icons'

const Project = () => {
    const [user , setUser] = useState([]);
    const [project , setProject] = useState([]);
    const userURL = "http://demo.emeetify.com:8080/daytodaytask/admin/getTotalCount";
    const projectURL = "http://demo.emeetify.com:8080/daytodaytask/clockify/getProjectsAdmin";
    const fetchUser = () =>{
        axios.get(userURL)
        .then(response => setUser(response.data.data))
        .catch(e=> {console.log("e" ,e)});
    }
    const fetchProject = () =>{
        axios.get(projectURL)
        .then(response => setProject(response.data.data))
        .catch(e =>{console.log("e" ,e)})
        
    }
   useEffect( ()=>{
    fetchUser();
    fetchProject();
   },[])


    return(
        <div style={{margin:'50px'}}>
            
        {user.map( (data) =>{
            return(
                <div>
                    <div style={{display:'flex' , flexDirection:'row' , marginLeft:'20px'}}>
                        <Card className='project-card-one' title="Total Users"  >         
                            <h1 style={{fontSize:'20px',marginTop:'0'}}>{data.TotalNames}{<UserOutlined style={{fontSize:'30px',paddingLeft:'30px'}}/>}</h1>
                        </Card>
                        <Card className='project-card-two' title="Total Projects">
                            <h1 style={{fontSize:'20px',marginTop:'0'}}>{data.TotalProjects}<FileOutlined style={{fontSize:'20px',paddingLeft:'30px'}}/></h1>
                         </Card>
                        <Card className='project-card-three' title="Total Tasks">
                            <h1 style={{fontSize:'20px',marginTop:'0'}}>{data.TotalTasks}<FileDoneOutlined style={{fontSize:'20px',paddingLeft:'30px'}}/></h1> 
                        </Card>
                     </div>
                    <div>
                        <Row>
                            {project.map( (data) => {
                                return(
                                    <div style={{justifyContent:'center' ,alignItems: 'center',}}>
                                        <Card  className='project_card'>
                                            <div style={{display:'flex' , flexDirection:'row'}}>
                                                <h1>{data.cl_project_id}</h1>
                                                <h1 style={{marginLeft:'50px'}}>{data.project_name}</h1>
                                                <h1 style={{marginLeft:'50px'}}>{data.note}</h1>
                                            </div>
                                            
                                        </Card>
                                    </div>
                                )
                            })}
                        </Row>
                       
                    </div>
                </div>
                
            )
        })}




            {/* <Card>
                {user.map( (user) => {
                    return(
                        <div>
                            {console.log(user + "<-------")}
                        </div>
                    )
                })}
            </Card> */}
        </div>
    )
}

export default Project