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
  heavy: "900"
};

export const letterSpacingDenominator = {
  s: 32,
  m: 16,
  l: 8,
  xl: 4,
  none: 1
};

export const typographyDefault: Typography = {
  headingLarge: {
    color: "primary",
    fontWeight: fontWeights.bold,
    lineHeight: {
      s: 52,
      m: 60
    },
    fontSize: {
      s: 46,
      m: 52
    }
  },
  headingMedium: {
    color: "primary",
    fontWeight: fontWeights.bold,
    lineHeight: {
      s: 24,
      m: 50
    },
    fontSize: {
      s: 20,
      m: 34
    }
  },
  headingSmall: {
    color: "primary",
    fontWeight: fontWeights.normal,
    lineHeight: {
      s: 24,
      m: 24
    },
    fontSize: {
      s: 16,
      m: 20
    }
  },
  bodyText: {
    color: "primary",
    fontWeight: fontWeights.normal,
    lineHeight: {
      s: 16,
      m: 24
    },
    fontSize: {
      s: 12,
      m: 16
    }
  },
  buttonPrimary: {
    color: "backgroundPrimary",
    fontWeight: fontWeights.bold,
    lineHeight: {
      s: 16,
      m: 24
    },
    fontSize: {
      s: 12,
      m: 16
    },
    letterSpacing: "xl"
  },
  buttonSecondary: {
    color: "primary",
    fontWeight: fontWeights.bold,
    lineHeight: {
      s: 16,
      m: 24
    },
    fontSize: {
      s: 12,
      m: 16
    },
    letterSpacing: "xl"
  },
  buttonTertiary: {
    color: "primary",
    fontWeight: fontWeights.bold,
    lineHeight: {
      s: 16,
      m: 24
    },
    fontSize: {
      s: 12,
      m: 16
    },
    letterSpacing: "xl"
  }
};
