import { useEffect, useState } from "react"
import { Login } from "./login"
import Register from "./register"
import { Button, Card } from 'antd'
const UnAuthenciated = () => {
    const [isRegister, setIsRegister] = useState(false)
    useEffect(() => {
        console.log(isRegister)
    }, [isRegister])
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card>
            {
                isRegister ? <Register /> : <Login />
            }
            <Button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</Button>
        </Card>
    </div>
}

export default UnAuthenciated