import { DefaultTheme } from "styled-components";
import { Dimensions } from "react-native";
import { breakpointsDefault } from "./breakpoints";
import { colorsLightTheme, colorsDarkTheme } from "./colors";
import { radiiDefault } from "./radii";
import { spacingsDefault } from "./spacings";
import { typographyDefault } from "./typography";
import { getBreakpoint } from "../helpers";
import { responsiveStyle, responsiveValue } from "../helpers/responsiveStyle";

const themeBase = {
  breakpoints: breakpointsDefault,
  radii: radiiDefault,
  spacings: spacingsDefault,
  typography: typographyDefault,
  responsiveStyle,
  responsiveValue,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  breakpoint: getBreakpoint(Dimensions.get("window").width, breakpointsDefault),
};

export const lightTheme: DefaultTheme = {
  name: "lightTheme",
  colors: colorsLightTheme,
  ...themeBase,
};

export const darkTheme: DefaultTheme = {
  name: "darkTheme",
  colors: colorsDarkTheme,
  ...themeBase,
};

export const themes = {
  lightTheme,
  darkTheme,
};
