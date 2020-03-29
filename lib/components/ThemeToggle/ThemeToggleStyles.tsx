import styled, { css } from "styled-components";
import { TouchableOpacity } from "react-native";
import { Moon, Sun } from "styled-icons/fa-solid";
import { Icon, IconProps } from "../Icon";

const CONTAINER_HEIGHT = 40;
const BORDER_WIDTH = 3;
const INNER_GAP = 2;
const CONTAINER_WIDTH = 78;

export const Container = styled(TouchableOpacity)`
  position: relative;
  background-color: transparent;
  width: ${CONTAINER_WIDTH}px;
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
  size: CONTAINER_HEIGHT - BORDER_WIDTH * 2 - INNER_GAP * 2,
  color: p.theme.colors.onBackground,
}))<DotProps & IconProps>`
  position: absolute;
  top: ${INNER_GAP}px;
  ${p =>
    p.currentTheme === "lightTheme"
      ? css`
          left: ${INNER_GAP}px;
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
  size: CONTAINER_HEIGHT - BORDER_WIDTH * 2 - INNER_GAP * 2,
  color: p.theme.colors.onBackground,
}))<DotProps & IconProps>`
  position: absolute;
  top: ${INNER_GAP}px;
  ${p =>
    p.currentTheme === "lightTheme"
      ? css`
          left: ${INNER_GAP}px;
          opacity: 0;
        `
      : css`
          left: ${CONTAINER_WIDTH - CONTAINER_HEIGHT}px;
          opacity: 1;
        `}
  transition: all 500ms;
`;
