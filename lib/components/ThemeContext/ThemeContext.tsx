import React from "react";
import { Dimensions } from "react-native";
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
  const [theme, setThemeState] = React.useState(themes[initialTheme]);
  const [dimensionsContext, setDimensionsContext] = React.useState({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    breakpoint: getBreakpoint(
      Dimensions.get("window").width,
      theme.breakpoints
    ),
  });

  React.useEffect(() => {
    const updateBreakpoint = (): void => {
      const { height, width } = Dimensions.get("window");
      const newBreakpoint = getBreakpoint(
        Dimensions.get("window").width,
        theme.breakpoints
      );

      setDimensionsContext({
        width,
        height,
        breakpoint: newBreakpoint,
      });
    };
    Dimensions.addEventListener("change", updateBreakpoint);

    return (): void => {
      Dimensions.removeEventListener("change", updateBreakpoint);
    };
  }, [theme]);

  React.useEffect(() => {
    const themeChangeListener = async (): Promise<void> => {
      const themeKey = await getPersistentTheme();

      if (!themeKey) {
        if (theme.name === "darkTheme") {
          setThemeState({
            ...themes.lightTheme,
            ...dimensionsContext,
          });
        } else if (theme.name === "lightTheme") {
          setThemeState({
            ...themes.darkTheme,
            ...dimensionsContext,
          });
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
  }, [theme]);

  const setTheme = (themeKey: keyof Themes): void =>
    setThemeState({
      ...themes[themeKey],
      ...dimensionsContext,
    });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeContextContainer.defaultProps = {
  themes: defaultThemes,
};
