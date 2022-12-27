import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import MoreEdit from './MoreEdit';
import MoreDelete from './DeleteMore';

const ClientDropdown = (props) => {
 const dbClient = props.clientData;
  // console.log(dbClient);
  const items = [
    {
      label: <MoreEdit EditClient = {dbClient}/> ,
      key: '0',
    },
    {
      label: <MoreDelete  DeleteClient = {dbClient}/>,
      key: '1',
    },
  ];
  return(
<Dropdown menu={{items ,}} trigger={['click']}>
        {<MoreOutlined style={{fontSize:'20px'}}  className='client-more-icon' />} 
  </Dropdown>
  )
}





export default ClientDropdown;