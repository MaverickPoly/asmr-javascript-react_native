import { createContext, ReactNode, useContext, useState } from "react";
import { Appearance } from "react-native";
import { DarkTheme, LightTheme } from "./theme";


type Theme = {
    dark: boolean;
    colors: {
        background: string;
        text: string;
        card: string;
        primary: string;
    };
}

interface ContextType {
    theme: Theme,
    toggleTheme: () => void;
}

const ThemeContext = createContext<ContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const systemTheme = Appearance.getColorScheme();
    const [theme, setTheme] = useState(systemTheme === "dark" ? DarkTheme : LightTheme)

    const toggleTheme = () => {
        setTheme((prev) => prev.dark ? LightTheme : DarkTheme)
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}


export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider")
    }
    return context
}
