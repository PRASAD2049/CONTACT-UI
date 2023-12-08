import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeContextProvider = function(props) {
    const [theme, setTheme] = useState('light');
    const themeValue = {theme, setTheme};

    return <ThemeContext.Provider value={themeValue}>
        {props.children}
    </ThemeContext.Provider>
}