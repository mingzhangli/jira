import { useEffect, useState } from "react"
import { Login } from "./login"
import Register from "./register"
import { Button, Card } from 'antd'
import styled from "@emotion/styled"
import logo from '../assets/logo.svg'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
const UnAuthenciated = () => {
    const [isRegister, setIsRegister] = useState(false)
    useEffect(() => {
        console.log(isRegister)
    }, [isRegister])
    return <Container>
        <Header />
        <Background />
        <ShadowCard>
            {
                isRegister ? <Register /> : <Login />
            }
            <a onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</a>
        </ShadowCard>
    </Container>
}

export default UnAuthenciated

const Container = styled.div`
    display : flex;
    flex-direction:column;
    align-items:center;
    min-height:100vh;
    justify-conent:center;
`

const ShadowCard = styled(Card)`
    width:40rem;
    height:56rem;
    padding:3.2rem 4rem;
    broder-radius:0.3rem;
    broder-size:border-box;
    box-shadow:rgba(0,0,0,0.1) 0 0 10px;
    text-align:center;
`

const Header = styled.header`
      background: url(${logo}) no-repeat center;
        padding: 5rem 0;
        background-size: 8rem;
        width: 100%
`

const Background = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position: left bottom, right bottom;
    background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 4) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;