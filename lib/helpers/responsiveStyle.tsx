import { Theme } from "./styled";

type Props = {
  [key: string]: any;
  theme: Theme;
};

export const responsiveStyle = (key: string, styles: any) => (
  props: Props
): Array<string> => {
  const newStyle: Array<string> = [];
  Object.entries(props.theme.breakpoints).forEach(
    ([breakpointKey, breakpointVal]) => {
      if (styles[breakpointKey] !== undefined) {
        if (breakpointVal === 0) {
          newStyle.push(`${key}: ${styles[breakpointKey]};`);
        } else {
          newStyle.push(
            `@media screen and (min-width: ${breakpointVal}px) { ${key}: ${styles[breakpointKey]}; }`
          );
        }
      }
    }
  );
  return newStyle;
};
