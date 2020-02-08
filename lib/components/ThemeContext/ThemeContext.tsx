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

// INITIAL VARIABLES

// returns initial key to find theme
export const initialThemeKey: keyof Themes =
  typeof window === "object" &&
  window.matchMedia &&
  // check what theme the user's browser is initially in
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "darkTheme"
    : "lightTheme";

// returns initial theme values to inject into Context
export const initialThemeContextValue: ThemeContextValue = {
  theme: {
    // Static parts of the theme
    // that only changes when you toggle themes (ie light theme / dark theme / holiday theme)
    ...defaultThemes[initialThemeKey],
    // Dynamic parts of the theme
    // that change when you resize the window
    breakpoint: getBreakpoint(
      Dimensions.get("window").width,
      defaultThemes[initialThemeKey].breakpoints
    ) as keyof Breakpoints,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  setThemeByThemeKey: () => {},
};

// FINAL VARIABLES

// Context that holds the theme
export const ThemeContext = React.createContext<ThemeContextValue>(
  initialThemeContextValue
);

// Component we wrap everything in in order to provide
// our theme to Styled Components
export const ThemeContextContainer = ({
  children,
  themes,
}: ThemeContextContainerProps): React.ReactElement => {
  const addDimensionsToTheme = React.useCallback(
    (theme: DefaultTheme) => ({
      // Static parts of the theme
      // that only changes when you toggle themes (ie light theme / dark theme / holiday theme)
      ...theme,
      // Dynamic parts of the theme
      // that change when you resize the window
      breakpoint: getBreakpoint(
        Dimensions.get("window").width,
        defaultThemes[initialThemeKey].breakpoints
      ) as keyof Breakpoints,
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
    }),
    []
  );

  // Theme value we pass into the context
  const [theme, setTheme] = React.useState(
    addDimensionsToTheme(themes[initialThemeKey])
  );

  const setThemeByThemeKey = (themeKey: keyof Themes): void => {
    setTheme(themes[themeKey]);
  };

  // updates theme when theme updates
  const themeRef = React.useRef<DefaultTheme>(theme);
  React.useEffect(() => {
    themeRef.current = theme;
  });

  // Watch for Breakpoint updates
  // Returns current breakpoint
  React.useEffect(() => {
    const updateBreakpoint = (): void => {
      setTheme(addDimensionsToTheme(theme));
    };
    Dimensions.addEventListener("change", updateBreakpoint);

    return (): void => {
      Dimensions.removeEventListener("change", updateBreakpoint);
    };
  }, [addDimensionsToTheme, theme]);

  // mounts listeners to watch for Theme Changes
  React.useEffect(() => {
    const themeChangeListener = async (): Promise<void> => {
      const themeKey = await getPersistentTheme();

      if (!themeKey) {
        if (theme.name === "darkTheme") {
          setTheme(addDimensionsToTheme(themes.lightTheme));
        } else if (theme.name === "lightTheme") {
          setTheme(addDimensionsToTheme(themes.darkTheme));
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
    // eslint-disable-next-line
  }, []); // run only once on Mount

  return (
    <ThemeContext.Provider value={{ theme, setThemeByThemeKey }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeContextContainer.defaultProps = {
  themes: defaultThemes,
};
