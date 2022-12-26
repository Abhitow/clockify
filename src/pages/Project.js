import React from 'react'
import {Button} from 'antd'
import axios from 'axios'

const Project = () => {

    const handleProject = () =>{
        console.log("<======button working")
        axios.get("http://demo.emeetify.com:8080/daytodaytask/admin/getTotalCount" )
        .then(response => {console.log(response)})
        .catch(e=> {console.log("e" ,e)});
    }


    return(
        <div>
            
            <h1>Welcome to Project Page</h1>
            <Button type='primary' onClick={handleProject}>Click Here</Button>
        </div>
    )
}

export default Project