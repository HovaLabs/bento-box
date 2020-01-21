import { DefaultTheme } from "styled-components";

import { Breakpoints } from ".";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "lightTheme" | "darkTheme";
    breakpoints: Breakpoints;
    colors: Colors;
    radii: Radii;
    spacings: Spacings;
    typography: Typography;
    responsiveStyle: (styleKey: string, styleObject: any) => any;
    responsiveValue: (styleObject: any) => (props: any) => any;
    width: number;
    height: number;
    breakpoint: keyof Breakpoints;
  }
}
