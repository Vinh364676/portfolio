import React from 'react'
import "./Contact.scss";
import { Button, Col, Form, Input, Row } from 'antd';
function Contact() {
  return (
    <div id='contact' >
      <div  data-aos="zoom-in" className='contact'>

     
      <h5 className='contact__title'>Contact Me</h5>
      <div className='contact__line'></div>
      
      <Row className='contact__content'>
        <Col xl={12}>
          <div className='content_rectangle'>
            <div className='content_rectangle__image'></div>
          </div>
        </Col>
        <Col xl={12}>
        <Form
    name="basic"
    className='contact__form'
    labelCol={{
      span: 24,
    }}
    wrapperCol={{
      span: 24,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input className='contact__form__input' placeholder='Name *'/>
    </Form.Item>

    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input className='contact__form__input' placeholder='Email *' />
    </Form.Item>

    <Form.Item
      name="message"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.TextArea className='contact__form__input contact__form__input__textarea' placeholder='Message *' />
    </Form.Item>
  
    <Form.Item
      
    >
      <Button type="primary" htmlType="submit" className='contact__form__button'>
        Send
      </Button>
    </Form.Item>
  </Form>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default Contact
