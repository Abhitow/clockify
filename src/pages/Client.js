import React, { useEffect , useState } from 'react'
import {Card , Row} from 'antd'
import axios from 'axios' 
import ClientDropdown from '../components/ClientDropdown'
import NewClient from '../components/NewClient'

const Client = () => {
    const [client ,setClient] = useState([]);
    const clientURL= "http://demo.emeetify.com:8080/daytodaytask/clockify/getClient";
    const fetchClient = () =>{
        console.log("<------handled Client");
        axios.get(clientURL)
        .then(response => setClient(response.data.data))
        .catch(e => {console.log("e" , e)})
    }
    useEffect( () => {
        fetchClient();
    } ,[])

    return(
        <div style={{marginTop:'50px' }}>
            <div>
                <NewClient />
            </div>
            <div>
            <Row>
            { client.map( (data) =>{
                return(
                    <div>
                        <Card title='Client Details' className='client-card' extra={<ClientDropdown clientData={data}  />}>
                            <h1 key={data.client_id}>{data.client_name}</h1>
                            <h1>{data.note}</h1>
                        </Card>
                    </div>
                )
            })}
            </Row>
            </div>
        </div>
    )
}

export default Client