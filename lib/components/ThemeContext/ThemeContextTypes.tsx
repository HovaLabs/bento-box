import { Theme, themes } from "../../theme";

export type ThemeKey = keyof typeof themes;
export type ThemeContextValue = {
    theme: Theme;
    setTheme: (input: ThemeKey) => void;
};
export interface ThemeContextContainerProps {
    children: React.ReactNode;
}
