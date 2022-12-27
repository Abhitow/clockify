import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import {Modal, Space } from 'antd';
const { confirm } = Modal;
const showDeleteConfirm = (props) => {
  console.log(props.DeleteClient);
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const MoreDelete = () => (
  <Space wrap>
       <h4 onClick={showDeleteConfirm} style={{marginTop:'0' ,textAlign:'center',marginBottom:'0'}}>
          Delete
        </h4>
  </Space>
);
export default MoreDelete;