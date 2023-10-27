import {THEME, ThemeContext, LOCAL_STORAGE_THEME_CONTEXT_KEY} from "./ThemeContext";
import {useContext} from "react";

interface ThemeResults{
    theme: THEME,
    toggleTheme: () => void,
}

export function useTheme(): ThemeResults{
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () =>{
        const resultTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        setTheme(resultTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_CONTEXT_KEY, resultTheme);
    }

    return{
        theme: theme,
        toggleTheme: toggleTheme
    }
}