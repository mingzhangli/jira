import { User } from "./screens/project-list/search-panel";

const localStorageKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL
export const getToken = () => window.localStorage.getItem(localStorageKey)
//获得token
interface paramProps {
    username: string;
    password: string;
}

export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = (data: paramProps) => {
    return fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (response) => {
        if (response.ok) {
            return handleUserResponse(await response.json())
        } else {
            return Promise.reject(await response.json());
        }
    })
}

export const register = (data: paramProps) => {
    return fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (response) => {
        if (response.ok) {
            return handleUserResponse(await response.json())
        } else {
            return Promise.reject(await response.json());
        }
    })
}

export const logout = async () => {
    window.localStorage.removeItem(localStorageKey)
}

