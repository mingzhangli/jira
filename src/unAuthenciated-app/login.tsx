import React, { FormEvent } from 'react'
import { useAuth } from '../context/auth-context';
import { Form, Input, Button } from 'antd'
import { useAsync } from '../utils/use-async';
export interface paramProps {
    username: string;
    password: string;
}


export const Login = ({ onError }: { onError: (error: Error) => void }) => {

    const apiUrl = process.env.REACT_APP_API_URL

    const { user, login } = useAuth()
    const { isLoading, run } = useAsync(undefined, { throwOnError: true })
    const handleSubmit = async (values: { username: string, password: string }) => {

        try {
            await run(login(values))
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
                <Form.Item>
                    <Button htmlType={'submit'} loading={isLoading} type={"primary"}>登录</Button>
                </Form.Item>
            </Form>
        </div>
    )
}


