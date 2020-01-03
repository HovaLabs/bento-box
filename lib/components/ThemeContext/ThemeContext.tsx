import React from "react";
import { themes as defaultThemes } from "../../theme";
import {
  ThemeKey,
  ThemeContextValue,
  ThemeContextContainerProps
} from "../../types";
import { getPersistentTheme } from "./persistentTheme";

// need to support passing in a theme directly from props instead of locally

export const initialTheme: ThemeKey =
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "darkTheme"
    : "lightTheme";

export const themeContextInitialValue: ThemeContextValue = {
  theme: defaultThemes[initialTheme],
  setTheme: () => {}
};

export const ThemeContext = React.createContext<ThemeContextValue>(
  themeContextInitialValue
);

export const ThemeContextContainer = ({
  children,
  themes
}: ThemeContextContainerProps): React.ReactElement => {
  const [theme, setThemeState] = React.useState(themes[initialTheme]);
  const themeRef = React.useRef(theme);

  React.useEffect(() => {
    themeRef.current = theme; // Write it to the ref
  });

  React.useEffect(() => {
    const themeChangeListener = async () => {
      const themeKey = await getPersistentTheme();

      if (!themeKey) {
        if (themeRef.current.name === "darkTheme") {
          setThemeState(themes.lightTheme);
        } else if (themeRef.current.name === "lightTheme") {
          setThemeState(themes.darkTheme);
        }
      }
    };

    if (window && window.matchMedia) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addListener(themeChangeListener);
    }

    return () => {
      if (window && window.matchMedia) {
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeListener(themeChangeListener);
      }
    };
  }, []);

  const setTheme = (themeKey: ThemeKey) => setThemeState(themes[themeKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeContextContainer.defaultProps = {
  themes: defaultThemes
};
