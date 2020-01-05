import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components";

export const Button = styled(TouchableOpacity)`
  ${p => css`
    background-color: ${p.theme.colors.accentPrimary};
    align-items: center;
    border-width: 0;
    border-radius: ${p.theme.radii.l}px;
    padding: ${p.theme.spacings.l}px;
  `}
`;
