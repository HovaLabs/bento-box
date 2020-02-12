import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components";
import color from "color";
import { ButtonProps } from "../../types";

import { Text as TextBB } from "../Text";

const buttonTransitionTime = "350ms";

const buttonVariantStyles = (p: any): any => {
  switch (p.variant) {
    case "secondary": {
      return css`
        background-color: transparent;
        border-width: 4px;
        border-color: ${p.disabled
          ? color(p.theme.colors.primary)
              .desaturate(0.5)
              .toString()
          : p.theme.colors.primary};
      `;
    }
    case "tertiary": {
      return css`
        background-color: transparent;
      `;
    }
    // aka primary
    default: {
      return css`
        background-color: ${p.disabled
          ? color(p.theme.colors.primary)
              .desaturate(0.5)
              .toString()
          : p.theme.colors.primary};
      `;
    }
  }
};

export const Button = styled(TouchableOpacity)<ButtonProps>`
  ${buttonVariantStyles}
  align-items: center;
  border-radius: ${p => p.theme.radii.none}px;
  padding: ${p => p.theme.spacings.l}px;
  transition: all ${buttonTransitionTime};
  cursor: ${p => (p.disabled ? "not-allowed" : "pointer")};
  > * {
    transition: all ${buttonTransitionTime};
  }
`;

// Determine the "color" prop based on which variant of the button it is
const buttonTextVariantColor = (p: any): { color: string } => {
  switch (p.variant) {
    case "secondary": {
      return {
        color: p.disabled
          ? color(p.theme.colors.primary)
              .desaturate(0.5)
              .toString()
          : p.theme.colors.primary,
      };
    }
    case "tertiary": {
      const colour = p.disabled
        ? color(p.theme.colors.onBackground)
            .fade(0.5)
            .toString()
        : p.theme.colors.onBackground;

      return {
        color: colour,
      };
    }
    // aka primary
    default: {
      return {
        color: p.theme.colors.onPrimary,
      };
    }
  }
};
interface ButtonTextProps {
  readonly disabled: ButtonProps["disabled"];
  readonly variant: ButtonProps["variant"];
}
export const Text = styled(TextBB).attrs(buttonTextVariantColor)<
  ButtonTextProps
>``;
