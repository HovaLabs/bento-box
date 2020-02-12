import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { TextProps as TextPropsRN, GestureResponderEvent } from "react-native";

// START Theme typings
export interface Breakpoints {
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
}

export interface Colors {
  onBackground: string;
  onSurface: string;
  onPrimary: string;
  onSecondary: string;
  background: string;
  surface: string;
  primary: string;
  secondary: string;
}

export interface Radii {
  none: 0;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  round: number;
}

export interface Spacings {
  none: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export type FontWeight = number | string;

export const FontWeights = {
  thin: "100",
  extraLight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  heavy: "900",
};

export type LetterSpacing = "s" | "m" | "l" | "xl" | "none" | number;

export interface BreakpointColor {
  s?: keyof Colors;
  m?: keyof Colors;
  l?: keyof Colors;
  xl?: keyof Colors;
}

export interface BreakpointFontWeight {
  s?: FontWeight;
  m?: FontWeight;
  l?: FontWeight;
  xl?: FontWeight;
}

export interface BreakpointLetterSpacing {
  s?: LetterSpacing;
  m?: LetterSpacing;
  l?: LetterSpacing;
  xl?: LetterSpacing;
}

export interface Typography {
  headingLarge: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  headingMedium: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  headingSmall: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  bodyText: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  buttonText: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export type ThemeContextValue = {
  theme: DefaultTheme;
  setThemeByThemeKey: (input: keyof Themes) => void;
};
export interface Themes {
  lightTheme: DefaultTheme;
  darkTheme: DefaultTheme;
}

export interface ButtonProps {
  /**
   * Press handler function
   * This will be ignored if href is preset or if disabled
   */
  onPress: (e: GestureResponderEvent) => void;
  /**
   * The content to be rendered inside of the button
   * If present, this prop will override any other content props
   */
  children?: React.ReactNode;
  /**
   * w3 "disabled" property
   */
  disabled?: boolean;
  /**
   * Use button as a url. This will cause the "onClick" handler to be ignored
   */
  href?: string;
  /**
   * Set the size of the button
   * @default "l"
   */
  size?: "s" | "m" | "l";
  /**
   * Text to be rendered inside button. This will be ignored if children are present
   */
  title?: string;
  /**
   * w3 button prop type. ("button", "reset", "submit")
   */
  type?: "button" | "reset" | "submit";
  /**
   * Which type of button?
   */
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * Style
   */
  style?: any;
}

export interface TextProps extends TextPropsRN {
  className?: string;
  /**
   * The text to be rendered
   */
  children?: string | Array<string>;
  /**
   * Allow overwriting the color
   */
  color?: keyof Colors;
  /**
   * Type of typography to be used
   */
  typography?: keyof Typography;
}

export interface ThemeContextContainerProps {
  children: React.ReactNode;
  themes: Themes;
}

export interface DimensionsContextProps {
  children: React.ReactNode;
}
