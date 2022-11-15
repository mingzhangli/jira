import React, { FormEvent } from 'react'
import { useAuth } from '../context/auth-context';
import { Form, Input, Button } from 'antd'
export interface paramProps {
    username: string;
    password: string;
}


const Register = () => {

    const apiUrl = process.env.REACT_APP_API_URL

    const { user, register } = useAuth()
    const handleSubmit = (values: { username: string, password: string }) => {
        register(values)
    }
    return (
        <div>
            <Form onFinish={handleSubmit}>
                <Form.Item name={'username'} rules={[{ required: true, message: '请输入账号' }]}>
                    <Input placeholder={'用户名'} type='text' id={'username'} />
                </Form.Item>
                <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
                    <Input placeholder={'密码'} type='password' id={'password'} />
                </Form.Item >
                <Form.Item>
                    <Button htmlType={'submit'} type={"primary"}>注册</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register
