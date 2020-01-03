export const isInitiallyDarkMode: boolean =
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
