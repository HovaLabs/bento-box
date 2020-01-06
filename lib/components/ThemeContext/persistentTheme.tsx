import { AsyncStorage } from "react-native";
import { isInitiallyDarkMode } from "./initialTheme";
import { Themes } from "../../types";

const THEME_STORAGE_KEY = "hova_labs_theme";
const themes = ["lightTheme", "darkTheme"];

export const getPersistentTheme = async (): Promise<
  keyof Themes | undefined
> => {
  try {
    const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme && !themes.includes(storedTheme)) {
      console.error("Invalid theme key");
      await AsyncStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      return storedTheme as keyof Themes;
    }
  } catch (ex) {
    console.error("Async storage error", ex);
  }
  const fallbackTheme: keyof Themes = isInitiallyDarkMode
    ? "darkTheme"
    : "lightTheme";
  return fallbackTheme;
};
