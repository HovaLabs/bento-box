import React from "react";
import { Text } from "../Text";
import { ButtonProps } from "../../types";

import * as S from "./ButtonStyles";

export const Button = ({
  disabled,
  // href,
  // variant,
  // size,
  onPress,
  style,
  title,
}: ButtonProps): React.ReactElement => {
  const foo = (
    <S.Button disabled={disabled} onPress={onPress} style={style}>
      <Text typography="buttonPrimary">{title}</Text>
    </S.Button>
  );
  return foo;
};
