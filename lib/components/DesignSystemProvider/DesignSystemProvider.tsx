import React from "react";
import { ThemeProvider } from "styled-components";
import { Themes } from "../../types";
import { ThemeContext, ThemeContextContainer } from "../ThemeContext";

export const DesignSystemProvider: React.FC<{
  children: any;
  themes?: Themes;
}> = ({ children, themes }) => (
  <ThemeContextContainer themes={themes}>
    <ThemeContext.Consumer>
      {({ theme }): React.ReactElement => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeContextContainer>
);
