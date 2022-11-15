import React, { FormEvent } from 'react'
import { useAuth } from '../context/auth-context';
export interface paramProps {
    username: string;
    password: string;
}


const Register = () => {

    const apiUrl = process.env.REACT_APP_API_URL

    const { user, register } = useAuth()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        register({ username, password })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>用户</label>
                    <input type='text' id={'username'} />
                </div>
                <div>
                    <label htmlFor='user'>密码</label>
                    <input type='password' id={'password'} />
                </div>
                <button type={'submit'}>注册</button>
            </form>
        </div>
    )
}

export default Register
