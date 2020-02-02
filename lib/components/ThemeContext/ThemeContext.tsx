import React from "react";
import { Dimensions } from "react-native";
import { DefaultTheme } from "styled-components";

import { themes as defaultThemes } from "../../theme";
import {
  Breakpoints,
  Themes,
  ThemeContextValue,
  ThemeContextContainerProps,
} from "../../types";
import { getPersistentTheme } from "./persistentTheme";
import { getBreakpoint } from "../../helpers";

export const initialTheme: keyof Themes =
  typeof window === "object" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "darkTheme"
    : "lightTheme";

export const themeContextInitialValue: ThemeContextValue = {
  theme: {
    ...defaultThemes[initialTheme],
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    breakpoint: getBreakpoint(
      Dimensions.get("window").width,
      defaultThemes[initialTheme].breakpoints
    ) as keyof Breakpoints,
  },
  setTheme: () => {},
};

export const ThemeContext = React.createContext<ThemeContextValue>(
  themeContextInitialValue
);

export const ThemeContextContainer = ({
  children,
  themes,
}: ThemeContextContainerProps): React.ReactElement => {
  const addDimensionsToTheme = React.useCallback(
    (theme: DefaultTheme) => ({
      ...theme,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      breakpoint: getBreakpoint(
        Dimensions.get("window").width,
        defaultThemes[initialTheme].breakpoints
      ) as keyof Breakpoints,
    }),
    []
  );

  const [theme, setThemeState] = React.useState(
    addDimensionsToTheme(themes[initialTheme])
  );

  React.useEffect(() => {
    const updateBreakpoint = (): void => {
      setThemeState(addDimensionsToTheme(theme));
    };
    Dimensions.addEventListener("change", updateBreakpoint);

    return (): void => {
      Dimensions.removeEventListener("change", updateBreakpoint);
    };
  }, [addDimensionsToTheme, theme]);

  React.useEffect(() => {
    const themeChangeListener = async (): Promise<void> => {
      const themeKey = await getPersistentTheme();

      if (!themeKey) {
        if (theme.name === "darkTheme") {
          setThemeState(addDimensionsToTheme(themes.lightTheme));
        } else if (theme.name === "lightTheme") {
          setThemeState(addDimensionsToTheme(themes.darkTheme));
        }
      }
    };

    if (window && window.matchMedia) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addListener(themeChangeListener);
    }

    return (): void => {
      if (window && window.matchMedia) {
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeListener(themeChangeListener);
      }
    };
  }, [theme, addDimensionsToTheme, themes.lightTheme, themes.darkTheme]);

  const setTheme = React.useCallback(
    (themeKey: keyof Themes): void =>
      setThemeState(addDimensionsToTheme(themes[themeKey])),
    [addDimensionsToTheme, themes]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeContextContainer.defaultProps = {
  themes: defaultThemes,
};
