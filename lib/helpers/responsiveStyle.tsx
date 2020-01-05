import { DefaultTheme } from "styled-components";

type Props = {
  [key: string]: any;
  theme: DefaultTheme;
};

export const responsiveStyle = (key: string, styles: any) => (
  props: Props
): Array<string> => {
  const newStyle: Array<string> = [];
  Object.entries(props.theme.breakpoints).forEach(
    ([breakpointKey, breakpointVal]) => {
      if (styles[breakpointKey] !== undefined) {
        newStyle.push(
          `@media screen and (min-width: ${breakpointVal}px) { ${key}: ${styles[breakpointKey]}; }`
        );
      }
    }
  );
  return newStyle;
};
