import { Breakpoints } from "../types";

export const getBreakpoint = (
  width: number,
  breakpoints: Breakpoints
): keyof Breakpoints => {
  const breakpointsArray = Object.entries(breakpoints).map(([key, val]) => ({
    key,
    val: val || 0, // hack: should never be undefined, but entire key/val is optional
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
