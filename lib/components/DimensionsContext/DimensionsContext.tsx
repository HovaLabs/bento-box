import React from "react";
import { Dimensions } from "react-native";

import {
  Breakpoints,
  DimensionsContextProps,
  DimensionsContextValue
} from "../../types";
import { breakpointsDefault } from "../../theme";
import { ThemeContext } from "../ThemeContext";

const getBreakpoint = (
  width: number,
  breakpoints: Breakpoints
): keyof Breakpoints => {
  const breakpointsArray = Object.entries(breakpoints).map(([key, val]) => ({
    key,
    val: val || 0 // hack: should never be undefined, but entire key/val is optional
  }));
  breakpointsArray.sort((a, b) => a.val - b.val);

  if (!breakpointsArray.length) {
    throw new Error("No breakpoints defined");
  }

  let newResponsiveKey = breakpointsArray[0].key as keyof Breakpoints;

  if (breakpointsArray.length === 1) {
    return newResponsiveKey;
  }

  for (let i = 0; i < breakpointsArray.length; i += 1) {
    if (width >= breakpointsArray[i].val) {
      newResponsiveKey = breakpointsArray[i].key as keyof Breakpoints;
    } else {
      break;
    }
  }
  return newResponsiveKey;
};

const dimensionsContextInitialValue: DimensionsContextValue = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  breakpoint: Object.keys(breakpointsDefault)[0] as keyof Breakpoints
};

export const DimensionsContext = React.createContext<DimensionsContextValue>(
  dimensionsContextInitialValue
);

export const DimensionsContextContainer = ({
  children
}: DimensionsContextProps): any => {
  const { theme } = React.useContext(ThemeContext);
  const [dimensionsContext, setDimensionsContext] = React.useState({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    breakpoint: getBreakpoint(Dimensions.get("window").width, theme.breakpoints)
  });
  const breakpointsRef = React.useRef(theme.breakpoints);

  React.useEffect(() => {
    breakpointsRef.current = theme.breakpoints; // Write it to the ref
  });

  React.useEffect(() => {
    const updateBreakpoint = (): void => {
      const { height, width } = Dimensions.get("window");
      const newBreakpoint = getBreakpoint(
        Dimensions.get("window").width,
        breakpointsRef.current
      );
      setDimensionsContext({
        width,
        height,
        breakpoint: newBreakpoint
      });
    };
    Dimensions.addEventListener("change", updateBreakpoint);

    return (): void => {
      Dimensions.removeEventListener("change", updateBreakpoint);
    };
  }, []);

  return (
    <DimensionsContext.Provider value={dimensionsContext}>
      {children}
    </DimensionsContext.Provider>
  );
};
