import React from "react";
import { eventEmitter } from 'react-native-dark-mode';

import { themes } from "../../theme";
import { isInitiallyDarkMode } from './initialTheme';
import { ThemeKey, ThemeContextValue, ThemeContextContainerProps } from './ThemeContextTypes';
import { getPersistentTheme } from './persistentTheme';

export const themeContextInitialValue: ThemeContextValue = {
    theme: themes[isInitiallyDarkMode ? 'darkTheme' : 'lightTheme'],
    setTheme: () => { }
};

export const ThemeContext = React.createContext<ThemeContextValue>(
    themeContextInitialValue
);

export const ThemeContextContainer = ({
    children
}: ThemeContextContainerProps): React.ReactElement => {
    const [theme, setThemeState] = React.useState(themes[isInitiallyDarkMode ? 'darkTheme' : 'lightTheme']);

    React.useEffect(() => {
        const setDarkTheme = async () => {
            const themeKey = await getPersistentTheme();
            if (themeKey === "darkTheme" && theme.name !== "darkTheme") {
                setThemeState(themes[themeKey]);
            }
        }

        const setLightTheme = async () => {
            const themeKey = await getPersistentTheme();
            if (themeKey === "lightTheme" && theme.name !== "lightTheme") {
                setThemeState(themes[themeKey]);
            }
        }
        eventEmitter.on('currentModeChanged', (newMode: string) => {
            if (newMode === 'light') {
                setLightTheme();
            } else if (newMode === 'dark') {
                setDarkTheme();
            } else {
                console.error('unknown mode', newMode);
            }
        });
    }, []);

    const setTheme = (themeKey: ThemeKey) => setThemeState(themes[themeKey]);

    const [themeContextValue, setThemeContextValue] = React.useState({
        theme,
        setTheme
    });

    React.useEffect(() => {
        setThemeContextValue({
            theme,
            setTheme
        });
    }, [theme]);

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
