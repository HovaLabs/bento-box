import React from "react";
import { Text } from "../Text";
import { ButtonProps } from "../../types";

import * as S from "./ButtonStyles";

export const Button = ({
  // children,
  // disabled,
  // href,
  // variant,
  // onClick,
  // size,
  title
}: // type,
ButtonProps) => (
  <S.Button>
    <Text typography="buttonPrimary">{title}</Text>
  </S.Button>
);
