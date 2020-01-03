export const isInitiallyDarkMode: boolean =
  typeof window === "object" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
