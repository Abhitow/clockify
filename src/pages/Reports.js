import React , {useState} from 'react'
import { Button, Card, Row } from 'antd'
import axios from 'axios'

const Reports = () => {
    const [post , setPost] = useState([]);
    const handleReport = () =>{
        console.log("<---------report handled");
        axios.get("http://demo.emeetify.com:8080/daytodaytask/admin/getToatalCountProjects")
        .then(response => {console.log(response)})
        .catch(e => {console.log("e" , e)});
    }
    return(
        <div>
            <h1>Welcome to Reports Page</h1>
            <Row>
                {post.map( (data) => {
                    return (
                        <div>
                            <Card>
                                
                            </Card>
                        </div>
                    )
                })}
            </Row>
        </div>
    )
}

export default Reports