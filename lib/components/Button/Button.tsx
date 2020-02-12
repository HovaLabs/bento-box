import React from "react";
import { TouchableOpacity } from "react-native";
import { DefaultTheme, StyledComponent } from "styled-components";

import { Text } from "../Text";
import { ButtonProps } from "../../types";

import * as S from "./ButtonStyles";

export const Button = ({
  disabled,
  // href,
  variant,
  // size,
  onPress,
  style,
  title,
}: ButtonProps): React.ReactElement => {
  return (
    <S.Button
      variant={variant}
      disabled={disabled}
      onPress={onPress}
      style={style}
    >
      <S.Text variant={variant} disabled={disabled} typography="buttonText">
        {title}
      </S.Text>
    </S.Button>
  );
};
Button.defaultProps = {
  variant: "primary",
};
