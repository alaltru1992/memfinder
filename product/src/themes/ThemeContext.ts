import {createContext} from 'react'

export const enum THEME{
    LIGHT='light',
    DARK='dark',
}

export  interface ThemeProps{
    theme?: THEME,
    setTheme?: (theme:THEME) => void,
}

export const ThemeContext = createContext<ThemeProps>({});

export const LOCAL_STORAGE_THEME_CONTEXT_KEY = 'theme'


