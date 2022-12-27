import React , {useState} from 'react'
import { Button, Card, Row } from 'antd'
import axios from 'axios'

const Reports = () => {
    const [post , setPost] = useState([]);
    const handleReport = () =>{
        console.log("<---------report handled");
        axios.get("http://demo.emeetify.com:8080/daytodaytask/admin/getTotalCount")
        .then(response => {console.log(response)})
        .catch(e => {console.log("e" , e)});
    }
    const handleClick = () =>{
        console.log("response");
    }
    return(
        <div>
            <h1>Welcome to Reports Page</h1>
            <Button type='primary' onClick={handleReport}>Submit</Button>
            {/* <Row>
                {post.map( (data) => {
                    return (
                        <div>
                            <Card style={{height:'200px' ,width:'100px'}}>
                                <Button onClick={handleClick}>Click</Button>
                            </Card>
                        </div>
                    )
                })}
            </Row> */}
        </div>
    )
}

export default Reports