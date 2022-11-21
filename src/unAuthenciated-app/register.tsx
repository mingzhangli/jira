import React, { FormEvent } from 'react'
import { useAuth } from '../context/auth-context';
import { Form, Input, Button } from 'antd'
import { useAsync } from '../utils/use-async';
export interface paramProps {
    username: string;
    password: string;
    cpassword: string;
}


const Register = ({ onError }: { onError: (error: Error) => void }) => {

    const apiUrl = process.env.REACT_APP_API_URL

    const { user, register } = useAuth()
    const { isLoading, run } = useAsync(undefined, { throwOnError: true })
    const handleSubmit = async ({ cpassword, ...values }: paramProps) => {
        if (cpassword !== values.password) {
            onError(new Error("两次输入的密码不相同"));
            return;
        }
        try {
            await run(register(values))
        } catch (e: any) {
            onError(e)
        }
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
                <Form.Item name={'cpassword'} rules={[{ required: true, message: '请输入确认密码' }]}>
                    <Input placeholder={'重复密码'} type='password' id={'cpassword'} />
                </Form.Item >
                <Form.Item>
                    <Button htmlType={'submit'} type={"primary"}>注册</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register
