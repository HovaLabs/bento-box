import { DefaultTheme } from "styled-components";
import { breakpointsDefault } from "./breakpoints";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radiiDefault } from "./radii";
import { spacingsDefault } from "./spacings";
import { typographyDefault } from "./typography";

const themeBase = {
  breakpoints: breakpointsDefault,
  radii: radiiDefault,
  spacings: spacingsDefault,
  typography: typographyDefault
};

export const lightTheme: DefaultTheme = {
  name: "lightTheme",
  colors: colorsLightTheme,
  ...themeBase
};

export const darkTheme: DefaultTheme = {
  name: "darkTheme",
  colors: colorsDarkTheme,
  ...themeBase
};

export const themes = {
  lightTheme,
  darkTheme
};
