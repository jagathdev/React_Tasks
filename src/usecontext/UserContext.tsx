import { createContext } from "react";

interface UserContextType {
    loginData: string,
    getInputData: () => void
}

export const UserContext = createContext<UserContextType | null>(null)