import React from "react";
import * as S from "./TextStyles";
import { TextProps, Typography } from "../../types";

export const Text = ({ children, typography }: TextProps) => (
  <S.Text typography={typography}>{children}</S.Text>
);
Text.defaultProps = {
  typography: "bodyText"
};
