import { useState, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeProvide = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState<boolean>(true)

    const themeChange = () => {
        setTheme(!theme)
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, themeChange }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvide;
