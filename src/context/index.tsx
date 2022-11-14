import { ReactNode } from 'react'
import { AuthProvider } from './auth-context'

export const AppProviders = ({ children }: { children: ReactNode }) => {
    return <AuthProvider>
        {children}
        <div>1232131</div>
    </AuthProvider>
}
