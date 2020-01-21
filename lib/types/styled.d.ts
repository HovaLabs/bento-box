import { DefaultTheme } from "styled-components";

import { Theme } from "../helpers/styled";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    foo?: string;
  }
}
