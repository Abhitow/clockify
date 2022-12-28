import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import {message, Modal, Space } from 'antd';
import axios from 'axios';
const { confirm } = Modal;

const MoreDelete = (props) => {
  const glob = props.DeleteClient.client_id;
  const [messageApi , contextHolder] =message.useMessage();
  const showDeleteConfirm = (props) => {
    // console.log(glob)
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OKkkkkk');
        messageApi.open({
          type:'success' ,
          content:'Client Deleted Successfully'
        })
        console.log(glob);
        axios.delete(`http://demo.emeetify.com:8080/daytodaytask/clockify/deleteClient?client_id=${glob}`)
        .then(response => {console.log(response)})
        .catch( e => {console.log("e" , e)})
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
 
  return(
    <Space wrap>
      {contextHolder}
    <h4 onClick={showDeleteConfirm}  style={{marginTop:'0' ,textAlign:'center',marginBottom:'0'}}>
       Delete
     </h4>
</Space>
  )
}
  

export default MoreDelete;