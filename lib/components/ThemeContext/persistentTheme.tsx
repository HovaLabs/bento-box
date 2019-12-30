import { AsyncStorage } from "react-native";
import { isInitiallyDarkMode } from "./initialTheme";
import { ThemeKey } from "../../types";

const THEME_STORAGE_KEY = "hova_labs_theme";
const themes = ["lightTheme", "darkTheme"];

export const getPersistentTheme = async (): Promise<ThemeKey | undefined> => {
  try {
    const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme && !themes.includes(storedTheme)) {
      console.error("Invalid theme key");
      await AsyncStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      return storedTheme as ThemeKey;
    }
  } catch (ex) {
    console.error("Async storage error", ex);
  }
  const fallbackTheme: ThemeKey = isInitiallyDarkMode
    ? "darkTheme"
    : "lightTheme";
  return fallbackTheme;
};
