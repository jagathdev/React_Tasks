import { createContext } from "react";

export interface ThemeContextType {
    theme: boolean,
    themeChange: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)