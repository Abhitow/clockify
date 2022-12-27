import React,{useState} from 'react'
import {Affix,Button , Form , Modal , Input, Checkbox, Radio} from 'antd'
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';

const NewUser = () =>{

    const [clientName , setClientName] = useState("");
    const [clientNote , setClientNote] = useState("");


const [isModalOpen , setIsModalOpen] = useState(false);

    const showModal = () =>{
        setIsModalOpen(true);
    }
    const handleCancel = () =>{
        setIsModalOpen(false);
    }
    const handleAdd = () => {
        console.log("Add Client Button Working");
    }
    const newClientURL = "http://demo.emeetify.com:8080/daytodaytask/clockify/createClient";
    const clientPayload = {
        "client_name" : clientName ,
        "note" : clientNote
    }
    const handleFinish = () =>{
        setIsModalOpen(false);
        console.log("form finish is working ")
        axios.post(newClientURL , clientPayload)
        .then(response => {console.log(response)
            if( response.data.status === 200)
            {
                setIsModalOpen(false)
            }
            else{
                setIsModalOpen(true);
            }
        })
        .catch( e =>{console.log("e" , e)})
    }
    return(
        <div >
            <Affix offsetTop={120} >
                <Button onClick={showModal}>Add Client</Button>
            </Affix>
            <Modal title='Add New Client' open={isModalOpen} footer={null}>
                <Form onFinish={handleFinish}>
                    <Form.Item label='Client Name' required hasFeedback>
                        <Input value={clientName} onChange={(e) => setClientName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label='Note'>
                        <TextArea value={clientNote} onChange={ (e) => setClientNote(e.target.value)}/>
                    </Form.Item>
                    <Form.Item style={{marginLeft:'300px'}}>
                        <Button onClick={handleCancel} style={{marginRight:'20px'}}>Cancel</Button>
                        <Button htmlType='submit' onClick={handleAdd}>Add</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default NewUser