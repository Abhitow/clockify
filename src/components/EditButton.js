import React,{useState} from 'react'
import {EditOutlined } from '@ant-design/icons'
import { Modal,Form ,Input,Checkbox,Button ,message } from 'antd';
import axios from 'axios';


const EditButton = (props) => {
let EditAPI = props.Userdata.user_id;
  const [isModalOpen , setIsModalOpen] = useState(false);
  const [fullName , setFullname] =useState("");
  const[designation , setDesignation] =useState("");
  const[email , setEmail] =useState("");
  const[phone , setPhone] =useState("");
  const[workexperience , setworkexperience] =useState("");
  const [usercompany , setUsercompany] =useState("");
  const [messageApi ,contextHolder] = message.useMessage();
  const [confirmLoading , setConfirmLoading] =useState(false);
  
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
  //  console.log(props.data);
   const handleEdit = () =>{
    console.log("----->edit button works");
    setIsModalOpen(true);
   console.log(props.Userdata);
   console.log(EditAPI);
}
    const handleCancel =() =>{
      setIsModalOpen(false)
    }
    const handleClick = () =>{
      console.log("---->handle clickeddd");
     
      
    }
    const payload ={
      "full_name": fullName,
      "designation":  designation,
      "work_experience": workexperience,
      "email": email,
      "mobile_no": phone,
      "user_company": usercompany
  };
  // console.log(EditAPI);
  const onFinish = (event) =>{
    console.log(props.Userdata);
    console.log("handleFinish")
    messageApi.open({
        type:'success',
        content:'Updated Successfully'
    })
    console.log(payload);
    console.log(EditAPI+ "<-------");
    axios.put(`http://demo.emeetify.com:8080/daytodaytask/admin/adminupdateUser/` + EditAPI, payload)
    .then( (response)=>
    {console.log(response) 
        if(response.data.status === true ){
                console.log("----->working");
                // setIsModalOpen(false);
        }else{
            console.log("--->not working");
        }
})
    .catch(e =>{console.log("e" ,e)})
    setConfirmLoading(true);
    setTimeout(()=>{
      setIsModalOpen(false);
      setConfirmLoading(false);
    },2000);
  }
    return(
        <div>
            <button onClick={handleEdit} className='card-edit-delete-button'><EditOutlined /></button>
            <Modal open={isModalOpen} footer={null}>
            <Form name='register'   onFinish={onFinish} scrollToFirstError {...formItemLayout} >
            <Form.Item
                name="fullname"
                label="FullName"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please input your Name!',
                    },
                ]}
                >
                 <Input className='register-form-input' autoComplete='off'  defaultValue={props.Userdata.full_name} onChange={(e)=>{setFullname(e.target.value)}}/>
            </Form.Item>
            <Form.Item 
            name='designation'
            label='Designation'
            hasFeedback
            rules={[
                {
                    required:true ,
                    message:'please enter your designation'
                }
            ]}>
                <Input className='register-form-input' defaultValue={props.Userdata.designation} onChange={(e)=>{setDesignation(e.target.value)}}/>
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                hasFeedback
                
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
                >
                 <Input className='register-form-input' defaultValue={props.Userdata.email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </Form.Item>
            <Form.Item
            name='workexperience'
            label='Work Experience'
            hasFeedback
            rules={[
                {
                    required:true ,
                    message:'please enter your experience'
                },
                {
                    min:0 ,
                    max:20
                }
            ]}>
                <Input className='register-form-input' defaultValue={props.Userdata.work_experience} onChange={(e)=>{setworkexperience(e.target.value)}}/>
            </Form.Item>
            <Form.Item
        name="phone"
        label="Phone Number"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
          
        ]}
      >
         <Input className='register-form-input' defaultValue={props.Userdata.phone} onChange={(e)=>{setPhone(e.target.value)}}
          style={{
            width: '80%',
          }}
        />
      </Form.Item>
      <Form.Item 
      name='company'
      label='Company'
      hasFeedback
      rules={[
        {
            required:true ,
            message:'please enter your company'
        }
      ]}>
        <Input className='register-form-input' defaultValue={props.Userdata.user_company} onChange={(e)=>{setUsercompany(e.target.value)}}/>
      </Form.Item>
      <Form.Item 
              name='agreement'
              valuePropName="checked"
              rules={[
                {
                    validator:(_ , value)=> 
                    value ? Promise.resolve() : Promise.reject(new Error('accept the agreement')),
                }
              ]} >
                <Checkbox >
                    I have read the <a href='https://www.google.com'>agreement</a>
                </Checkbox>
              </Form.Item>
            <Form.Item>
                {contextHolder}
                <Button onClick={handleClick} htmlType='submit' type='primary' className='register-form-submit-button'>Update</Button>
                <Button onClick={handleCancel}  className='register-form-cancel-button' danger>Cancel</Button>
            </Form.Item>
        </Form>
            </Modal>
        </div>
    )    
}
export default EditButton