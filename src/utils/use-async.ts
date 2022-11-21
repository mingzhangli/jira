import initCollapseMotion from 'antd/es/_util/motion';
import { useState } from 'react'
import { DefaultClause } from 'typescript';
interface State<D> {
    error: Error | null;
    data: D | null;
    stat: 'idle' | 'loading' | 'error' | 'success'
}

const defaultInitialState: State<null> = {
    error: null,
    data: null,
    stat: 'idle'
}
const defaultConfig = {
    throwOnError: false,
};

export const useAsync = <D>(initailState?: State<D>, initialConfig?: typeof defaultConfig) => {
    const config = { ...defaultConfig, ...initialConfig }
    const [state, setState] = useState({
        ...defaultInitialState,
        ...initailState
    })

    const setData = (data: D) => setState({
        data,
        error: null,
        stat: 'success'
    })

    const setError = (error: Error) => setState({
        error,
        data: null,
        stat: 'error'
    })

    const run = (promise: Promise<D>) => {
        if (!promise || !promise.then) {
            throw new Error('请传入promise')
        }
        setState({ ...state, stat: 'loading' })
        return promise.then(data => {
            setData(data)
            return data
        })
            .catch(error => {
                // catch会消化异常，如果不主动抛出，外面是接收不到异常的
                setError(error)
                if (config.throwOnError) {
                    return Promise.reject(error)
                }
                return error
            })
    }
    return {
        isIdle: state.stat === 'idle',
        isLoading: state.stat === 'loading',
        isError: state.stat === 'error',
        isSuccess: state.stat === 'success',
        run,
        setData,
        setError,
        ...state
    }
}