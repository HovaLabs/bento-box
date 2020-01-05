import React from "react";
import { ThemeProvider } from "styled-components";
import { Themes } from "../../types";
import { ThemeContext, ThemeContextContainer } from "../ThemeContext";
import { DimensionsContextContainer } from "../DimensionsContext";

export const DesignSystemProvider = ({
  children,
  themes,
}: {
  children: any;
  themes?: Themes;
}): any => (
  <ThemeContextContainer themes={themes}>
    <ThemeContext.Consumer>
      {({ theme }): React.ReactElement => (
        <ThemeProvider theme={theme}>
          <DimensionsContextContainer>{children}</DimensionsContextContainer>
        </ThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeContextContainer>
);
