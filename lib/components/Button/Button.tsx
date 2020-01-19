import React from "react";
import { Text } from "../Text";
import { ButtonProps } from "../../types";

import * as S from "./ButtonStyles";

export const Button = ({
  // children,
  // disabled,
  // href,
  // variant,
  // size,
  onPress,
  title,
}: ButtonProps): React.ReactElement => {
  const foo = (
    <S.Button onPress={onPress}>
      <Text typography="buttonPrimary">{title}</Text>
    </S.Button>
  );
  return foo;
};
