import React,{useEffect, useState} from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import {ExclamationCircleOutlined} from '@ant-design/icons'
import {Modal , Space} from 'antd'
import axios  from 'axios'

const DeleteButton = (props) => {
    
    let DeleteApi = props.DeleteData.user_id;
    console.log(DeleteApi + "<========");
    const [open ,setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
      };
      const hideModal = () => {
        setOpen(false);
        console.log("<-----user Deleted");
        axios.delete("http://demo.emeetify.com:8080/daytodaytask/admin/deleteUser/" + DeleteApi ,)
        .then(response =>{console.log(response)})
        .catch(e=>{console.log("e" , e)})
       
      };

      




    return(
       <div>
        <button onClick={showModal} className='card-edit-delete-button' style={{color:'red'}}><DeleteOutlined /></button>
        <Modal
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Confirm"
        cancelText="Cancel" 
        
      >
        <div style={{display:'flex' ,flexDirection:'row'}}>
        <ExclamationCircleOutlined style={{fontSize:'20px' ,marginRight:'20px'}}/>
        <h3>Are You Sure To Delete The User ?</h3>
        </div>
       
      </Modal>
       </div>
    )    
}



export default DeleteButton