import { Project } from "../screens/project-list/list";
import { useEffect } from 'react'
import { useAsync } from "./use-async";
import { cleanObject } from ".";
import { useHttp } from "./http";


export const useProjects = (param?: Partial<Project>) => {
    const client = useHttp()
    const { run, ...result } = useAsync<Project[]>()
    useEffect(() => {
        run(client('projects', { data: cleanObject(param || {}) }))
    }, [param])
    return result

}