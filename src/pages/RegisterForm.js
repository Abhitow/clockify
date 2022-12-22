import React, {  useState } from 'react'
import {Button, Card, Checkbox, Form, Input, message} from 'antd'
import axios from 'axios'


const Register = () =>{
    const [messageApi ,contextHolder] = message.useMessage();
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
    //   const [user , setUser] = useState({
    //     fullname :"",
    //     designation:"",
    //     email:"",
    //     workexperience:"",
    //     phone:"" ,
    //     usercompany:"" , 
    //   });

    const [fullName , setFullname] =useState("");
    const[designation , setDesignation] =useState("");
    const[email , setEmail] =useState("");
    const[phone , setPhone] =useState("");
    const[workexperience , setworkexperience] =useState("");
    const [usercompany , setUsercompany] =useState("");
      

    const payload ={
        "full_name": fullName,
        "designation":  designation,
        "work_experience": workexperience,
        "email": email,
        "mobile_no": phone,
        "user_company": usercompany
    };
      const onFinish =(values) =>{
        console.log("handleFinish")
       
        messageApi.open({
            type:'success',
            content:'successfully registered'
        })
        console.log(payload);
        axios.post("http://demo.emeetify.com:8080/daytodaytask/admin/register" ,payload)
        .then((response)=>{console.log(response)})
        .catch(e =>{console.log("e" ,e)})
      }
      const handleClick = () =>{
        console.log("handling");
      }

     
     
    return(
        <div className='loginpage-container'>
            <Card className='loginpage-card'>
            <Form name='register' {...formItemLayout}  onFinish={onFinish} scrollToFirstError  >
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
                 <Input className='register-form-input'  value={fullName} onChange={(e)=>{setFullname(e.target.value)}}/>
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
                <Input value={designation} onChange={(e)=>{setDesignation(e.target.value)}}/>
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
                 <Input className='register-form-input' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
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
                <Input value={workexperience} onChange={(e)=>{setworkexperience(e.target.value)}}/>
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
         <Input value={phone} onChange={(e)=>{setPhone(e.target.value)}}
          style={{
            width: '100%',
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
        <Input value={usercompany} onChange={(e)=>{setUsercompany(e.target.value)}}/>
      </Form.Item>
      <Form.Item 
              name='agreement'
              valuePropName="checked"
              rules={[
                {
                    validator:(_ , value)=> 
                    value ? Promise.resolve() : Promise.reject(new Error('accept the agreement')),
                }
              ]} {...tailFormItemLayout}>
                <Checkbox >
                    I have read the <a href='https://www.google.com'>agreement</a>
                </Checkbox>
              </Form.Item>
            <Form.Item>
                {contextHolder}
                <Button onClick={handleClick} htmlType='submit' type='primary' className='register-form-submit-button'>Register</Button>
                <Button  className='register-form-cancel-button' danger>Cancel</Button>
            </Form.Item>
        </Form>
            </Card>
        </div>
    )
}

export default Register