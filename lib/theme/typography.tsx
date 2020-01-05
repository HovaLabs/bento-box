import { css } from "styled-components";

import { FontWeights, Typography } from "../types";

export const fontWeights: FontWeights = {
  thin: "100",
  extraLight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  heavy: "900",
};

export const letterSpacingDenominator = {
  s: 32,
  m: 16,
  l: 8,
  xl: 4,
  none: 1,
};

export const typographyDefault: Typography = {
  headingLarge: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${fontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "46px",
        m: "52px",
      })}
    `}
  `,
  headingMedium: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${fontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "20px",
        m: "34px",
      })}
    `}
  `,
  headingSmall: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${fontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "16px",
        m: "20px",
      })}
    `}
  `,
  bodyText: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${fontWeights.normal};
      ${p.theme.responsiveStyle("font-size", {
        s: "12px",
        m: "16px",
      })}
    `}
  `,
  buttonPrimary: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${fontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "12px",
        m: "16px",
      })}
    `}
  `,
  buttonSecondary: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${fontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "12px",
        m: "16px",
      })}
    `}
  `,
  buttonTertiary: css`
    ${p => css`
      color: ${p.theme.colors.primary};
      font-weight: ${fontWeights.bold};
      ${p.theme.responsiveStyle("font-size", {
        s: "12px",
        m: "16px",
      })}
    `}
  `,
};
