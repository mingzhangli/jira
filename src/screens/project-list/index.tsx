import React, { useEffect, useState } from "react"
import List from "./list"
import Searchpanel from "./search-panel"
import * as qs from "qs"
import { cleanObject, useDebounce } from "../../utils"

const apiUrl = process.env.REACT_APP_API_URL


const ProjectListScreen = () => {
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debounceParam = useDebounce(param, 2000)

    useEffect(() => {
        console.log(cleanObject(param))
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [debounceParam])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    }, [])

    return <div>
        <Searchpanel param={param} setParam={setParam} users={users} />
        <List list={list} users={users} />
    </div>
}
export default ProjectListScreen