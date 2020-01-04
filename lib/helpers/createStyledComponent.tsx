// @flow
import React from "react";

import { ThemeContext } from "../components/ThemeContext";
import { DimensionsContext } from "../components/DimensionsContext";
import {
  Colors,
  Contexts,
  Props,
  StyleObjectFunction,
  PropsStylesObjectFunction,
  StyleValue,
  StyleObject,
  PropsStylesObject,
  Breakpoints,
  BreakpointStyleValue
} from "../types";

// For a given style key/value
// If the value is a function - call the function with props as an arg
// Else return the value
//
// In the case of a function, recursively resolve until the value is no longer a function
const resolveStyle = (
  styleValue: StyleValue,
  contexts: Contexts,
  props: any
): StyleValue => {
  if (typeof styleValue === "number" || typeof styleValue === "string") {
    return styleValue;
  }
  if (typeof styleValue === "object") {
    for (
      let i = Object.keys(contexts.theme.breakpoints).indexOf(
        contexts.dimensions.breakpoint
      );
      i >= 0;
      i -= 1
    ) {
      const breakpoint = Object.keys(contexts.theme.breakpoints)[
        i
      ] as keyof Breakpoints;
      const responsiveStyleValue = styleValue[
        breakpoint
      ] as BreakpointStyleValue;
      if (responsiveStyleValue !== undefined) {
        return resolveStyle(responsiveStyleValue, contexts, props);
      }
    }
    return 0; // Hack: Need better edge case story with breakpoints
  }
  return resolveStyle(styleValue(contexts, props), contexts, props);
};

const createStyles = (
  styleInputObject: StyleObject = {},
  contexts: Contexts,
  props: any = {}
) => {
  const styleOutputObject: any = {};
  Object.keys(styleInputObject).forEach((key: string) => {
    const value: StyleValue = styleInputObject[key];
    styleOutputObject[key] = resolveStyle(value, contexts, props);
  });
  return styleOutputObject;
};

// TODO: Add forwardref
export const createStyledComponent = (ComponentInput: any) => (
  styleArg?: StyleObject | StyleObjectFunction,
  propsStylesArg?: PropsStylesObject | PropsStylesObjectFunction
) =>
  React.memo<any>(
    (props: Props = {}): React.ReactElement => {
      const { theme } = React.useContext(ThemeContext);
      const dimensions = React.useContext(DimensionsContext);

      const contexts: Contexts = {
        theme,
        dimensions
      };

      // If either arg is a function, resolve it to an object
      const computedStyleObject: any =
        (typeof styleArg === "function"
          ? styleArg(contexts, props)
          : styleArg) || {};
      const castedComputedStyleObject: StyleObject = computedStyleObject;

      const computedPropsStylesObject: PropsStylesObject =
        (typeof propsStylesArg === "function"
          ? propsStylesArg(contexts, props)
          : propsStylesArg) || {};

      const computedStyle = createStyles(
        castedComputedStyleObject,
        contexts,
        props
      );

      const computedPropsStyles: any = {};
      Object.keys(computedPropsStylesObject).forEach((key: string) => {
        const styleProp = computedPropsStylesObject[key];
        computedPropsStyles[key] = createStyles(styleProp, contexts, props);
      });

      return (
        <ComponentInput
          style={computedStyle}
          {...computedPropsStyles}
          {...props}
        />
      );
    }
  );

export { StyleObject };
