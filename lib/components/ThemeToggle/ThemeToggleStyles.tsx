import styled, { css } from "styled-components";
import { TouchableOpacity } from "react-native";
import { Moon, Sun } from "styled-icons/fa-solid";
import { Icon, IconProps } from "../Icon";

const CONTAINER_HEIGHT = 54;
const BORDER_WIDTH = 4;
const CONTAINER_WIDTH = 104;

export const Container = styled(TouchableOpacity)`
  position: relative;
  background-color: transparent;
  width: 104px;
  height: ${CONTAINER_HEIGHT}px;
  border-width: ${BORDER_WIDTH}px;
  border-color: ${p => p.theme.colors.onBackground};
  border-radius: 9999px;
  display: flex;
`;

interface DotProps {
  currentTheme: "lightTheme" | "darkTheme";
}
export const LightIcon = styled(Icon).attrs(p => ({
  IconComponent: Sun,
  size: CONTAINER_HEIGHT - BORDER_WIDTH * 3,
  color: p.theme.colors.onBackground,
}))<DotProps & IconProps>`
  position: absolute;
  top: 2px;
  ${p =>
    p.currentTheme === "lightTheme"
      ? css`
          left: ${BORDER_WIDTH}px;
          opacity: 1;
        `
      : css`
          left: ${CONTAINER_WIDTH - CONTAINER_HEIGHT}px;
          opacity: 0;
        `}
  transition: all 500ms;
`;

export const DarkIcon = styled(Icon).attrs(p => ({
  IconComponent: Moon,
  size: CONTAINER_HEIGHT - BORDER_WIDTH * 3,
  color: p.theme.colors.onBackground,
}))<DotProps & IconProps>`
  position: absolute;
  top: 2px;
  ${p =>
    p.currentTheme === "lightTheme"
      ? css`
          left: ${BORDER_WIDTH}px;
          opacity: 0;
        `
      : css`
          left: ${CONTAINER_WIDTH - CONTAINER_HEIGHT}px;
          opacity: 1;
        `}
  transition: all 500ms;
`;
