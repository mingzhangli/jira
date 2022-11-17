import { useAuth } from "./context/auth-context"
import ProjectListScreen from "./screens/project-list"
import styled from "@emotion/styled"
import { Row } from "./components/lib"
import { ReactComponent as SoftwareLogo } from '../src/assets/software-logo.svg'
import { Dropdown, Menu, Button } from "antd"
import userEvent from "@testing-library/user-event"

export const Authenciated = () => {

    const { logout, user } = useAuth()
    const items = [
        {
            label: <Button type={"link"} onClick={logout}>登出</Button>,
            key: '0',
        },
    ];

    return <Container>
        <Header between={true} >
            <HeaderLeft gap={4}>
                < SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
                <h2>项目</h2>
                <h2>用户</h2>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown menu={{ items }} placement="bottomLeft">
                    <Button type={"link"} style={{ fontSize: '17px' }}>hi,{user?.name ?? '无'}</Button>
                </Dropdown>
            </HeaderRight>
        </Header>
        <ProjectListScreen />
    </Container>
}

const Container = styled.div`
    height:100vh;
`

/* grid-area 用来给grid子元素起名字 */

const Header = styled(Row)`
padding:3.2rem;
grid-area:header;
`
const HeaderLeft = styled(Row)`
`
const HeaderRight = styled.div`
`



