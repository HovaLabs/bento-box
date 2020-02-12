import { TouchableOpacity } from "react-native";
import styled, { css, DefaultTheme } from "styled-components";
import color from "color";

interface ButtonProps {
  readonly disabled?: boolean;
}
export const Button = styled(TouchableOpacity)<ButtonProps>`
  ${(p: ButtonProps & { theme: DefaultTheme }) => css`
    background-color: ${p.disabled
      ? color(p.theme.colors.primary)
          .desaturate(0.5)
          .toString()
      : p.theme.colors.primary};
    align-items: center;
    border-width: 0;
    border-radius: ${p.theme.radii.none}px;
    padding: ${p.theme.spacings.l}px;
    transition: all 350ms;
    cursor: ${p.disabled ? "not-allowed" : "pointer"};
  `}
`;
