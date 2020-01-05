import { DefaultTheme } from "styled-components";

// START CreateStyledComponents types
export type Contexts = {
  theme: DefaultTheme;
  dimensions: DimensionsContextValue;
};

export type Props = {
  [key: string]: any;
};

export type StyleObjectFunction = (
  contexts: Contexts,
  props: Props
) => StyleObject;
export type PropsStylesObjectFunction = (
  context: Contexts,
  props: Props
) => PropsStylesObject;
export type BreakpointStyleValue = {
  s?: string | number | StyleFunction;
  m?: string | number | StyleFunction;
  l?: string | number | StyleFunction;
  xl?: string | number | StyleFunction;
};
export type StyleFunction = (contexts: Contexts, props: Props) => StyleValue;
export type StyleValue = string | number | StyleFunction | BreakpointStyleValue;
export type StyleObject = {
  [key: string]: StyleValue;
};
export type PropsStylesObject = {
  [key: string]: StyleObject;
};
// END CreateStyledComponents types

// START Theme typings
export type Breakpoints = {
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
};

export type Colors = {
  primary: string;
  secondary: string;
  tertiary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  accentPrimary: string;
  accentSecondary: string;
  accentTertiary: string;
};

export type Radii = {
  none: 0;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  round: number;
};

export type Spacings = {
  none: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
};

export type FontWeight = number | string;

export type FontWeights = {
  thin: "100";
  extraLight: "200";
  light: "300";
  normal: "400";
  medium: "500";
  semiBold: "600";
  bold: "700";
  extraBold: "800";
  heavy: "900";
};

type LetterSpacing = "s" | "m" | "l" | "xl" | "none" | number;

export type BreakpointColor = {
  s?: keyof Colors;
  m?: keyof Colors;
  l?: keyof Colors;
  xl?: keyof Colors;
};

export type BreakpointFontWeight = {
  s?: FontWeight;
  m?: FontWeight;
  l?: FontWeight;
  xl?: FontWeight;
};

export type BreakpointLetterSpacing = {
  s?: LetterSpacing;
  m?: LetterSpacing;
  l?: LetterSpacing;
  xl?: LetterSpacing;
};

export type TypographyValue = {
  color: keyof Colors;
  fontSize: StyleValue;
  fontWeight: BreakpointFontWeight | FontWeight;
  letterSpacing?: BreakpointLetterSpacing | LetterSpacing;
  lineHeight: StyleValue;
};

export type Typography = {
  headingLarge: TypographyValue;
  headingMedium: TypographyValue;
  headingSmall: TypographyValue;
  bodyText: TypographyValue;
  buttonPrimary: TypographyValue;
  buttonSecondary: TypographyValue;
  buttonTertiary: TypographyValue;
};

export type ThemeContextValue = {
  theme: DefaultTheme;
  setTheme: (input: ThemeKey) => void;
};
export type Themes = {
  lightTheme: DefaultTheme;
  darkTheme: DefaultTheme;
};
export type ThemeKey = keyof Themes;

export interface ButtonProps {
  /**
   * Press handler function
   */
  onPress: (e: Event) => void;
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
   * Click handler for the button. This will be ignored if href is preset or if disabled
   */
  onClick?: Function;
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
}

export interface TextProps {
  /**
   * The text to be rendered
   */
  children?: string;
  typography?: keyof Typography;
}

export interface ThemeContextContainerProps {
  children: React.ReactNode;
  themes: Themes;
}

export interface DimensionsContextProps {
  children: any;
}

export type DimensionsContextValue = {
  width: number;
  height: number;
  breakpoint: keyof Breakpoints;
};
