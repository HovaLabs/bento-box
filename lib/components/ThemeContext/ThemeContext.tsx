import React from "react";
import { themes } from "../../theme";
import { ThemeKey, ThemeContextValue, ThemeContextContainerProps } from './ThemeContextTypes';
import { getPersistentTheme } from './persistentTheme';

export const initialTheme: ThemeKey = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'darkTheme' : 'lightTheme';

export const themeContextInitialValue: ThemeContextValue = {
  theme: themes[initialTheme],
  setTheme: () => { }
};

export const ThemeContext = React.createContext<ThemeContextValue>(
  themeContextInitialValue
);

export const ThemeContextContainer = ({
  children
}: ThemeContextContainerProps): React.ReactElement => {
  const [theme, setThemeState] = React.useState(themes[initialTheme]);

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
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addListener(setDarkTheme);
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").addListener(setLightTheme);
    return (() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeListener(setDarkTheme);
      window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").removeListener(setLightTheme);
    })
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
