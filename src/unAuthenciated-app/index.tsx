import { useEffect, useState } from "react"
import { Login } from "./login"
import Register from "./register"
const UnAuthenciated = () => {
    const [isRegister, setIsRegister] = useState(false)
    useEffect(() => {
        console.log(isRegister)
    }, [isRegister])
    return <>
        {
            isRegister ? <Register /> : <Login />
        }
        <button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</button>
    </>
}

export default UnAuthenciated