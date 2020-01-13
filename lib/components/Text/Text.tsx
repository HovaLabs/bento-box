import React from "react";
import * as S from "./TextStyles";
import { TextProps, Typography } from "../../types";

export const Text = ({ children, color, typography }: TextProps) => {
  const typographyKey = typography as keyof Typography;
  return (
    <S.Text color={color} typography={typographyKey}>
      {children}
    </S.Text>
  );
};
Text.defaultProps = {
  children: "",
};
