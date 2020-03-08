import React from "react";
import * as S from "./ThemeToggleStyles";

export const ThemeToggle: React.FC<{
  currentTheme: "lightTheme" | "darkTheme";
  onPress: () => void;
}> = ({ currentTheme, onPress }) => (
  <S.Container onPress={onPress}>
    <S.DarkIcon currentTheme={currentTheme} />
    <S.LightIcon currentTheme={currentTheme} />
  </S.Container>
);
