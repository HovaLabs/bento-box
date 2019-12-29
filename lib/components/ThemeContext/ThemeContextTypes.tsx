import { Theme, themes } from "../../theme";

export type ThemeKey = keyof typeof themes;
export type ThemeContextValue = {
  theme: Theme;
  setTheme: (input: ThemeKey) => void;
};

type Themes = {
  lightTheme: Theme;
  darkTheme: Theme;
};
export interface ThemeContextContainerProps {
  children: React.ReactNode;
  themes: Themes;
}
