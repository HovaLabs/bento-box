import React from "react";
import styled from "styled-components";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ThemeToggle } from ".";
import { DesignSystemProvider } from "..";

export default {
  title: "ThemeToggle",
  decorators: [withKnobs],
};

export const themeToggle: React.FunctionComponent = () => {
  const [themeName, setThemeName] = React.useState<"darkTheme" | "lightTheme">(
    "darkTheme"
  );

  return (
    <DesignSystemProvider>
      <ThemeToggle
        onPress={() => {
          setThemeName(themeName === "darkTheme" ? "lightTheme" : "darkTheme");
        }}
        currentTheme={themeName}
      />
    </DesignSystemProvider>
  );
};
