import { Theme } from "../theme";

export type Contexts = {
  theme: Theme;
  //   Dimensions: DimensionsContextType;
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
export type StyleFunction = (contexts: Contexts, props: Props) => StyleValue;
export type StyleValue = string | number | StyleFunction;
export type StyleObject = {
  [key: string]: StyleValue;
};
export type PropsStylesObject = {
  [key: string]: StyleObject;
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
