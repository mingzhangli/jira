import React, { useState } from "react"
import List from "./list"
import { useUrlQueryParam } from "../../utils/url"
import Searchpanel from "./search-panel"
import { cleanObject, useDebounce, useDocumentTitle, useMount } from "../../utils"
import { useHttp } from "../../utils/http"
import styled from '@emotion/styled'
import { useProjects } from "../../utils/project"
import { useUsers } from "../../utils/users"
import { Button, Row } from "antd"
const apiUrl = process.env.REACT_APP_API_URL


const ProjectListScreen = (props: { setProjectModalOpen: (isOpen: boolean) => void }) => {

    //基本类型、组件状态可以放到依赖里的，非组件状态的对象绝不可以放到依赖里
    const [param, setParam] = useUrlQueryParam(['name', 'personId'])
    //给页面增加一个loading和error加载状态，提高页面友好性

    const debounceParam = useDebounce(param, 200)
    const { isLoading, data: list } = useProjects(debounceParam)

    const client = useHttp()
    const { data: users } = useUsers()

    useDocumentTitle(' 列表', false)
    return <Container>
        <Row align={'middle'} justify={'space-between'}>
            <h1>项目列表</h1>
            <Button onClick={() => props.setProjectModalOpen(true)}>创建项目</Button>
        </Row>
        <Searchpanel param={param} setParam={setParam} users={users || []} />
        <List
            dataSource={list || []}
            users={users || []}
            loading={isLoading}
            setProjectModalOpen={props.setProjectModalOpen}
        />
    </Container>
}
export default ProjectListScreen

ProjectListScreen.whyDidYouRender = true

const Container = styled.div`
    padding:3.6rem
`