import styled, { css } from "styled-components";
import { TouchableOpacity } from "react-native";
import { Moon, Sun } from "styled-icons/fa-solid";
import { Icon, IconProps } from "../Icon";

const CONTAINER_HEIGHT = 28;

export const Container = styled(TouchableOpacity)`
  position: relative;
  background-color: transparent;
  width: 54px;
  height: ${CONTAINER_HEIGHT}px;
  border-width: 2px;
  border-color: ${p => p.theme.colors.primary};
  border-radius: 9999px;
  display: flex;
`;

interface DotProps {
  currentTheme: "lightTheme" | "darkTheme";
}
export const LightIcon = styled(Icon).attrs(p => ({
  IconComponent: Sun,
  size: 20,
  color: p.theme.colors.primary,
}))<DotProps & IconProps>`
  position: absolute;
  top: 2px;
  ${p =>
    p.currentTheme === "lightTheme"
      ? css`
          left: 2px;
          opacity: 1;
        `
      : css`
          left: 28px;
          opacity: 0;
        `}
  transition: all 300ms;
`;

export const DarkIcon = styled(Icon).attrs(p => ({
  IconComponent: Moon,
  size: 20,
  color: p.theme.colors.primary,
}))<DotProps & IconProps>`
  position: absolute;
  top: 2px;
  ${p =>
    p.currentTheme === "lightTheme"
      ? css`
          left: 2px;
          opacity: 0;
        `
      : css`
          left: 28px;
          opacity: 1;
        `}
  transition: all 300ms;
`;
