import React, {useState, createContext} from 'react';

const ThemeContext = createContext("light")
const  ThemeProvider = ({ children}) => {
    const defaultTheme = window.localStorage.getItem("theme") ?? "light";
    const [theme, setTheme] = useState(defaultTheme);

    const toggleTheme = (value) => {
        window.localStorage.setItem("theme", value)
        setTheme(value);
    }

    return (
       <ThemeContext.Provider
        value={{
            theme,
            toggleTheme
        }}
       >
           {children}
       </ThemeContext.Provider>
    );
}

export {ThemeContext, ThemeProvider};