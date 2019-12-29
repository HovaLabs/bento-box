export const isInitiallyDarkMode: boolean =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
