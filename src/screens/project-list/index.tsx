import React, { useEffect, useState } from "react"
import List from "./list"
import Searchpanel from "./search-panel"
import * as qs from "qs"
import { cleanObject, useDebounce, useMount } from "../../utils"
import { useHttp } from "../../utils/http"
import styled from '@emotion/styled'
import { Typography } from 'antd'
const apiUrl = process.env.REACT_APP_API_URL


const ProjectListScreen = () => {
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [isloading, setIsloading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    //给页面增加一个loading和error加载状态，提高页面友好性
    const debounceParam = useDebounce(param, 2000)
    const client = useHttp()
    useEffect(() => {
        setIsloading(true)
        client('projects', { data: cleanObject(debounceParam) }).then(res => setList(res))
            .catch((error) => {
                setError(error)
                setList([])
            })
            .finally(() => setIsloading(false));
    }, [debounceParam])

    useMount(() => {
        client('users').then(res => setUsers(res));
    })
    return <Container>
        <h1>项目列表</h1>
        <Searchpanel param={param} setParam={setParam} users={users} />
        {error ? <Typography.Text type="danger">{error.message}</Typography.Text> : null}
        <List dataSource={list || []} users={users} loading={isloading} />
    </Container>
}
export default ProjectListScreen

const Container = styled.div`
    padding:3.6rem
`