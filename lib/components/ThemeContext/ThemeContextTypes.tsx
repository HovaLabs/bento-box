import { Theme } from "../../theme";
import { Themes } from "../../types";

export interface ThemeContextContainerProps {
  children: React.ReactNode;
  themes: Themes;
}
