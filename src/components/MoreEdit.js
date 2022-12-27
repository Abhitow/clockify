import React, { useState } from 'react';
import { Modal ,Form ,Input ,Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
const MoreEdit = (props) => {
  const updateClient =  props.EditClient.client_id ;

  console.log( props.EditClient.client_id)
    const [clientName , setClientName] = useState("");
    const [note , setNote] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleUpdate = () => {
   
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    console.log("canceled")
  };


  const clientPayload = {
    "client_name":clientName,
    "note":note
  }
  const handleFinish = () =>{
    console.log("form handled<========");
    axios.put(`http://demo.emeetify.com:8080/daytodaytask/clockify/updateClient `  + updateClient,clientPayload)
    .then((response)=>  {console.log(response)})
    .catch( e => {console.log("e" ,e)})
  }
  return (
    <>
      <h4 onClick={showModal} style={{height:'5px',textAlign:'center',marginTop:'0'}}>
        Edit
      </h4>
      <Modal title="Update Client Details" open={isModalOpen} footer={null}>
        <Form onFinish={handleFinish}>
            <Form.Item label='Client Name' required hasFeedback 
            rules={[
              {
                required:true , 
                messagae:'input something'
                }]}>
                <Input value={clientName} defaultValue={clientName} onChange={(e) => {setClientName(e.target.value)}} />
            </Form.Item>
            <Form.Item label='Note'>
                <TextArea value={note} defaultValue={note} onChange={(e) => {setNote(e.target.value)}}/>
            </Form.Item>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button htmlType='submit' onClick={handleUpdate}>Update</Button>
        </Form>
      </Modal>
    </>
  );
};
export default MoreEdit;