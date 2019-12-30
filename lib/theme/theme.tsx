import { Theme } from "../types";
import { breakpointsDefault } from "./breakpoints";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radiiDefault } from "./radii";
import { spacingsDefault } from "./spacings";
import { typographyDefault } from "./typography";

export const lightTheme: Theme = {
  name: "lightTheme",
  breakpoints: breakpointsDefault,
  colors: colorsLightTheme,
  radii: radiiDefault,
  spacings: spacingsDefault,
  typography: typographyDefault
};

export const darkTheme: Theme = {
  name: "darkTheme",
  breakpoints: breakpointsDefault,
  colors: colorsDarkTheme,
  radii: radiiDefault,
  spacings: spacingsDefault,
  typography: typographyDefault
};

export const themes = {
  lightTheme,
  darkTheme
};
