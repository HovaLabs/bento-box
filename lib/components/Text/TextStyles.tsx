import { Text as TextRN } from "react-native";
import styled from "styled-components";
import { Typography } from "../../types";

interface TextProps {
  readonly typography: keyof Typography;
}

export const Text = styled(TextRN)<TextProps>`
  ${p => {
    const typography = p.typography
      ? p.theme.typography[p.typography]
      : p.theme.typography.bodyText;
    return typography;
  }}
`;
