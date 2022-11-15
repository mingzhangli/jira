import * as qs from "qs"
import * as auth from '../auth-provider'
import { useAuth } from "../context/auth-context"
const apiUrl = process.env.REACT_APP_API_URL


interface Config extends RequestInit {
    data?: object;
    token?: string | undefined;
}


//如果想要传入的参数（对象）可传可不传的话，在传入的对象参数加一个={}
const http = (endpoint: string, { data, token, headers, ...customerconfig }: Config = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Barer${token}` : '',
            'Content-Type': data ? 'application/json' : ''
        },
        ...customerconfig
    }

    if (config.method.toUpperCase() === 'GET') {
        endpoint += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data)
    }
    //判断传过来的method是get还是post、delete、put，如果是get的话参数是放在url上面的，不是get的话就把参数放在body请求体里的


    return window.fetch(`${apiUrl}/${endpoint}`, config).then(async Response => {
        if (Response.status === 401) {
            //判断状态码是401的话说明没有权限了，则清空localStorage，并返回登录页面
            await auth.logout()
            window.location.reload()
            return Promise.reject('账号信息过时，请重新登录')
        }
        const data = await Response.json()
        if (Response.ok) {
            return data
        } else {
            return Promise.reject('账号或者密码有误')
        }
    })
}


export const useHttp = () => {
    const { user } = useAuth()
    return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token })
}