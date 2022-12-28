import React,{useState} from 'react'
import {Affix,Button , Form , Modal , Input,message} from 'antd'
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';

const NewUser = () =>{

    const formItemLayout = {
        labelCol: {
          xs: {span: 24,},
          sm: {span: 8,},
        },
        
        wrapperCol: {
          xs: {span: 24,},
          sm: {span: 16,},
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {span: 24,offset: 0,},
          sm: {span: 16,offset: 8,},
        },
      };

    const [clientName , setClientName] = useState("");
    const [clientNote , setClientNote] = useState("");
    const [isModalOpen , setIsModalOpen] = useState(false);
    const [messageApi , contextHolder] = message.useMessage();

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
        // setIsModalOpen(false);
        console.log("form finish is working ")
        axios.post(newClientURL , clientPayload)
        .then(response => {console.log(response)
            if( response.data.status === true)
            {
                setIsModalOpen(false)
                messageApi.open({
                    type:'success',
                    content:'Client Added successfully'
                })
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
            <Modal  title='Add New Client' style={{textAlign:'center'}} open={isModalOpen} footer={null}>
                <Form onFinish={handleFinish} {...formItemLayout}>
                    <Form.Item label='Client Name' name='clientName' hasFeedback
                    rules={[
                        {
                            required:true ,
                            message:'please add client name' ,
                        }
                    ]}
                    >
                        <Input value={clientName} onChange={(e) => setClientName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label='Note'>
                        <TextArea value={clientNote} required onChange={ (e) => setClientNote(e.target.value)}/>
                    </Form.Item>
                    <div style={{display:'flex' ,flexDirection:'row'}}>
                    <Form.Item style={{marginLeft:'250px'}}>
                        <Button onClick={handleCancel} style={{marginRight:'20px'}}>Cancel</Button>
                    </Form.Item>
                    <Form.Item>
                    {contextHolder}
                    <Button htmlType='submit' type='primary' onClick={handleAdd}>Add</Button>
                    </Form.Item>
                    </div>
                   
                </Form>
            </Modal>
        </div>
    )
}
export default NewUser