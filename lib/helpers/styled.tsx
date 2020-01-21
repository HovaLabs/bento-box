import * as styledComponents from "styled-components/native";

import { Breakpoints, Colors, Radii, Spacings, Typography } from "../types";

export interface Theme {
  name: "lightTheme" | "darkTheme";
  breakpoints: Breakpoints;
  colors: Colors;
  radii: Radii;
  spacings: Spacings;
  typography: Typography;
  responsiveStyle: (styleKey: string, styleObject: any) => any;
  responsiveValue: (styleObject: any) => any;
  width: number;
  height: number;
  breakpoint: keyof Breakpoints;
}

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  Theme
>;

export { css, ThemeProvider };
export default styled;
