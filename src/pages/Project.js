import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Card ,Row ,Col} from 'antd'
import { UserOutlined ,
     FileOutlined , 
     FileDoneOutlined } from '@ant-design/icons'

const Project = () => {
    const [user , setUser] = useState([]);
    const userURL = "http://demo.emeetify.com:8080/daytodaytask/admin/getTotalCount";
    const fetchUser = () =>{
        axios.get(userURL)
        .then(response => setUser(response.data.data))
        .catch(e=> {console.log("e" ,e)});
    }
   useEffect( ()=>{
    fetchUser();
   },[])


    return(
        <div style={{margin:'50px'}}>
            
        {user.map( (data) =>{
            return(
                <div style={{display:'flex' , flexDirection:'row' , marginLeft:'20px'}}>
                    <Card className='project-card-one' title="Total Users"  >         
                        {<UserOutlined style={{fontSize:'60px'}}/>}
                        <h1 style={{fontSize:'20px'}}>{data.TotalNames}</h1>
                    </Card>
                    <Card className='project-card-two' title="Total Projects">
                        <FileOutlined style={{fontSize:'60px'}}/>
                        <h1 style={{fontSize:'20px'}}>{data.TotalProjects}</h1>
                    </Card>
                    <Card className='project-card-three' title="Total Tasks">
                        <FileDoneOutlined style={{fontSize:'60px'}}/>
                        <h1 style={{fontSize:'20px'}}>{data.TotalTasks}</h1> 
                    </Card>
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