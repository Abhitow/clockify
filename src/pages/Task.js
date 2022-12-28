import React,{useEffect, useState} from 'react'
import {Table} from 'antd'
import axios from 'axios';

const Task =() =>{
    const [task ,setTask] =useState([]);

    const taskURL = "http://demo.emeetify.com:8080/daytodaytask/admin/getAllTask";

    useEffect( () =>{
        getData()
    },[])
    const getData = async()=>{
        await axios.get(taskURL)
        .then(response =>{
                    
                setTask( response.data.data.map(row =>(
                    {
                        TaskName: row.task_name,
                        ProjectName: row.project_name ,
                        Description : row.task_description ,
                        WorkingHours : row.workingHours
                    }
                )

                ))
        }
            )
        .catch()
    }
    const columns = [
        {
            title:'Task Name',
            dataIndex:'TaskName'
        },
        {
            title:'Project Name',
            dataIndex:'ProjectName'
        },
        {
            title:'Description',
            dataIndex:'Description'
        },
        {
            title:'Working Hours',
            dataIndex:'WorkingHours'
        },
    ];
    return(
        <div style={{marginTop:'30px'}}>
            <Table columns={columns} dataSource={task} scroll={{y:500}}></Table>
        </div>
    )
}
export default Task