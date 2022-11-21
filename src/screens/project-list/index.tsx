import React, { useEffect, useState } from "react"
import List from "./list"
import Searchpanel from "./search-panel"
import { cleanObject, useDebounce, useDocumentTitle, useMount } from "../../utils"
import { useHttp } from "../../utils/http"
import styled from '@emotion/styled'
import { Typography } from 'antd'
import { useProjects } from "../../utils/project"
import { useUsers } from "../../utils/users"
const apiUrl = process.env.REACT_APP_API_URL
import { useUrlQueryParam } from "../../utils/url"

const ProjectListScreen = () => {
    const [, setParam] = useState({
        name: '',
        personId: ''
    })

    const param = useUrlQueryParam(['name', 'personId'])
    //给页面增加一个loading和error加载状态，提高页面友好性

    const debounceParam = useDebounce(param, 2000)
    const { isLoading, error, data: list } = useProjects(debounceParam)

    const client = useHttp()

    const { data: users } = useUsers()

    useDocumentTitle('列表', false)
    return <Container>
        <h1>项目列表</h1>
        <Searchpanel param={param} setParam={setParam} users={users || []} />
        <List dataSource={list || []} users={users || []} loading={isLoading} />
    </Container>
}
export default ProjectListScreen

const Container = styled.div`
    padding:3.6rem
`