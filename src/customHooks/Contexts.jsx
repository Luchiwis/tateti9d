import { createContext } from "react"
import { useState } from "react"

// contexts
const ThemeContext = createContext()


export function Contexts({ children }) {
    const [theme, setTheme] = useState("light")
    return (

        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>

    )
}

export { ThemeContext }