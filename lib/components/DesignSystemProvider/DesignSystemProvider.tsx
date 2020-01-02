import React from "react";
import { Themes } from "../../types";
import { ThemeContextContainer } from "../ThemeContext";
import { DimensionsContextContainer } from "../DimensionsContext";

export const DesignSystemProvider = ({
  children,
  themes
}: {
  children: any;
  themes?: Themes;
}): any => (
  <ThemeContextContainer themes={themes}>
    <DimensionsContextContainer>{children}</DimensionsContextContainer>
  </ThemeContextContainer>
);
