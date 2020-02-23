import { Text as TextRN } from "react-native";
import styled from "styled-components";
import { Colors, Typography } from "../../types";

interface TextProps {
  className?: string;
  readonly typography: keyof Typography;
  readonly color?: keyof Colors;
}

export const Text = styled(TextRN)<TextProps>`
  ${p => {
    const typography = p.typography
      ? p.theme.typography[p.typography]
      : p.theme.typography.bodyText;
    return typography;
  }}
  ${p => (p.color ? `color: ${p.theme.colors[p.color] || p.color};` : "")}
`;
