import React, { useEffect, useState } from "react"
import List from "./list"
import Searchpanel from "./search-panel"
import * as qs from "qs"
import { cleanObject, useDebounce, useMount } from "../../utils"
import { useHttp } from "../../utils/http"

const apiUrl = process.env.REACT_APP_API_URL


const ProjectListScreen = () => {
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debounceParam = useDebounce(param, 2000)
    const client = useHttp()
    useEffect(() => {
        client('projects', { data: cleanObject(debounceParam) }).then(res => setList(res));
    }, [debounceParam])

    useMount(() => {
        client('users').then(res => setUsers(res));
    })
    return <div>
        <Searchpanel param={param} setParam={setParam} users={users} />
        <List list={list} users={users} />
    </div>
}
export default ProjectListScreen