import React, { ReactNode, useState } from 'react'
import { paramProps } from '../screens/login'
import * as auth from '../auth-provider'
import { User } from '../screens/project-list/search-panel'
const AuthContext = React.createContext<
    | {
        user: User | null;
        login: (form: paramProps) => Promise<void>;
        register: (form: paramProps) => Promise<void>;
        logout: () => Promise<void>;
    }
    | undefined
>(undefined);

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const login = (form: paramProps) => auth.login(form).then(user => setUser(user))
    const register = (form: paramProps) => auth.register(form).then(user => setUser(user))
    const logout = () => auth.logout().then(user => setUser(null))
    return <AuthContext.Provider value={{ user, login, register, logout }} children={children} />
}

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth必须在AuthProvider里面用")
    }
    return context
}   
