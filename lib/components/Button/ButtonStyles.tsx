import styled, { css } from "styled-components";
import { TouchableOpacity } from "react-native";

export const Button = styled(TouchableOpacity)`
  ${p => css`
    background-color: ${p.theme.colors.accentPrimary};
    align-items: center;
    border-width: 0;
    border-radius: ${p.theme.radii.l};
    padding: ${p.theme.spacings.l};
  `}
`;
