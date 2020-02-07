import { DefaultTheme } from "styled-components";

interface Props {
  theme: DefaultTheme;
}

/*
 * If we want to turn an object with breakpoints as keys
 * and return only the value of the current breakpoint, use this
 */
export const responsiveValue = (styles: any) => (props: Props): any => {
  const sortedBreakpoints = Object.entries(props.theme.breakpoints)
    .sort(([, valA], [, valB]) => {
      return valA - valB;
    })
    .map(([key]) => key);

  // want to return the style closest to the current breakpoint, without going over
  // loop through every breakpoint backwards, starting with the current breakpoint
  for (
    let i = sortedBreakpoints.indexOf(props.theme.breakpoint);
    i >= 0;
    i -= 1
  ) {
    if (styles[sortedBreakpoints[i]] !== undefined) {
      return styles[sortedBreakpoints[i]];
    }
  }
  console.error("Unable to find a responsvie value");
  return undefined;
};

/*
 * If we want to turn a css key (the first arg)
 * and an object with breakpoints as keys (the second arg)
 * into a single key-value css declaration, use this
 */
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
