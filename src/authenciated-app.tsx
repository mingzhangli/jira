import { useAuth } from "./context/auth-context"
import ProjectListScreen from "./screens/project-list"
import styled from "@emotion/styled"
import { Row } from "./components/lib"
export const Authenciated = () => {

    const { logout } = useAuth()
    return <Container>
        <Header between={true} >
            <HeaderLeft gap={4}>
                <h3>Logo</h3>
                <h3>项目</h3>
                <h3>用户</h3>
            </HeaderLeft>
            <HeaderRight>
                <button onClick={() => logout()}>登出</button>
            </HeaderRight>
        </Header>
        <Nav>nav</Nav>
        <Main>
            <ProjectListScreen />
        </Main>
        <Aside>aslide</Aside>
        <Footer>footer</Footer>
    </Container>
}

const Container = styled.div`
    display:grid;
    grid-template-rows: 6rem 1fr 6rem;
    grid-template-columns:20rem 1fr 20rem; 
    grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer" ;
    height:100vh;
`

/* grid-area 用来给grid子元素起名字 */

const Header = styled(Row)`
grid-area:header;
`
const HeaderLeft = styled(Row)`
`
const HeaderRight = styled.div`

`
const Main = styled.main`grid-area:main`
const Nav = styled.nav`grid-area:nav`
const Aside = styled.aside`grid-area:aside`
const Footer = styled.footer`grid-area:footer`

const PageHeader = styled.header`
        height:6rem;
    `



