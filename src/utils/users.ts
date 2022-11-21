import { User } from '../screens/project-list/search-panel';
import { useEffect } from 'react'
import { useAsync } from "./use-async";
import { useHttp } from "./http";


export const useUsers = () => {
    const client = useHttp()
    const { run, ...result } = useAsync<User[]>()
    useEffect(() => {
        run(client('users'))
    }, [])
    return result
}