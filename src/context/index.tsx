import { AuthProvider } from "./auth-context";
import { ReactNode } from "react";
export const AppProviders = ({ children }: { children: ReactNode }) => {
    return <AuthProvider>
        {children}
    </AuthProvider>
}