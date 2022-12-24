import { useAuth } from "./context/auth-context"
import styled from "@emotion/styled"
import { useState } from 'react'
import { Row } from "./components/lib"
import { ReactComponent as SoftwareLogo } from '../src/assets/software-logo.svg'
import { Dropdown, Button } from "antd"
import { BrowserRouter as Router } from 'react-router-dom'
import { Navigate, Route, Routes, } from 'react-router'
import { ProjectScreen } from './screens/project'
import ProjectListScreen from "./screens/project-list"
import { ProjectModal } from "./screens/project-list/project-modal"
import { ProjectPopover } from "./components/project-popover"

export const Authenciated = () => {
    const { logout, user } = useAuth()
    const [projectModalOpen, setProjectModalOpen] = useState(false)
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
                <ProjectPopover setProjectModalOpen={setProjectModalOpen} />
                <span>用户</span>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown menu={{ items }} placement="bottomLeft">
                    <Button type={"link"} style={{ fontSize: '17px' }}>hi,{user?.name ?? '无'}</Button>
                </Dropdown>
            </HeaderRight>
        </Header>
        <ProjectModal projectModalOpen={projectModalOpen} onClose={() => setProjectModalOpen(false)} />
        <Router>
            <Routes>
                <Route path={"/projects"} element={<ProjectListScreen setProjectModalOpen={setProjectModalOpen} />} />
                <Route
                    path={"/projects/:projectId/*"}
                    element={<ProjectScreen />}
                />
                {/* /* 表示匹配任意字符串 */}
                <Route index element={<Navigate to="/projects" />} />
            </Routes>
        </Router>
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


