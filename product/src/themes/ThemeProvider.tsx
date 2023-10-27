import {ThemeContext, THEME, LOCAL_STORAGE_THEME_CONTEXT_KEY} from "./ThemeContext";
import {FC, useMemo, useState} from "react";

const ThemeProvider: FC = ({children}) =>{
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_CONTEXT_KEY) as THEME || THEME.LIGHT;

    const [theme, setTheme] = useState<THEME>(defaultTheme)

    const toggleTheme = () =>{
        setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
    }
    const memorizedProvider = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }),[theme])

    return <ThemeContext.Provider value={memorizedProvider}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider