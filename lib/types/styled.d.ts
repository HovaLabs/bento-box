import "styled-components";
import { Breakpoints, Colors, Radii, Spacings, Typography } from "./index";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "lightTheme" | "darkTheme";
    breakpoints: Breakpoints;
    colors: Colors;
    radii: Radii;
    spacings: Spacings;
    typography: Typography;
  }
}
