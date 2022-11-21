import { useSearchParams } from 'react-router-dom'

//返回页面url中的指定键 参数值

export const useUrlQueryParam = <K extends string>(keys: K[]) => {

    const [searchParams, setSearchParams] = useSearchParams()

    return [
        keys.reduce((prev, key) => {
            return { ...prev, [key]: searchParams.get(key) }
        }, {}),
        setSearchParams
    ] as const
}