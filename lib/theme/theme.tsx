import { Colors } from "../types";
import { Breakpoints, breakpointsDefault } from "./breakpoints";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { Radii, radiiDefault } from "./radii";
import { Spacings, spacingsDefault } from "./spacings";
import { Typography, typographyDefault } from "./typography";

export type Theme = {
  name: "lightTheme" | "darkTheme";
  breakpoints: Breakpoints;
  colors: Colors;
  radii: Radii;
  spacings: Spacings;
  typography: Typography;
};

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
