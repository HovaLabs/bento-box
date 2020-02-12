import React from "react";
import styled, { css } from "styled-components";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { Button } from ".";
import { DesignSystemProvider } from "..";

export default {
  title: "My Button",
  decorators: [withKnobs],
};

export const text = (): React.ReactElement => (
  <DesignSystemProvider>
    <div style={{ margin: 16 }}>
      <Button
        disabled={boolean("Disabled", false)}
        onPress={() => {
          console.log("yo");
        }}
        title="Hello Primary Button"
      />
    </div>
    <div style={{ margin: 16 }}>
      <Button
        variant="secondary"
        disabled={boolean("Disabled", false)}
        onPress={() => {
          console.log("yo");
        }}
        title="Hello Secondary Button"
      />
    </div>
    <div style={{ margin: 16 }}>
      <Button
        variant="tertiary"
        disabled={boolean("Disabled", false)}
        onPress={() => {
          console.log("yo");
        }}
        title="Hello Tertiary Button"
      />
    </div>
  </DesignSystemProvider>
);

export const emoji = () => (
  <DesignSystemProvider>
    <Button
      onPress={() => {
        console.log("yo");
      }}
      variant="primary"
      size="m"
      title="😀 😎 👍 💯"
    />
  </DesignSystemProvider>
);
