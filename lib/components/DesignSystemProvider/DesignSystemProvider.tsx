import React from "react";
import { ThemeProvider } from "styled-components";
import { Themes } from "../../types";
import { ThemeContext, ThemeContextContainer } from "../ThemeContext";

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
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeContextContainer>
);
