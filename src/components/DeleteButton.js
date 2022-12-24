import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
const DeleteButton = () => {
    return(
        <div style={{float:'right'}}>
            <Button style={{background:'none' , border:'none' }}><DeleteOutlined /></Button>
        </div>
    )    
}
export default DeleteButton