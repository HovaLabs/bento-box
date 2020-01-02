import React from "react";

import { Button } from ".";
import { DesignSystemProvider } from "..";

export default {
  title: "My Button"
};

export const text = () => (
  <DesignSystemProvider>
    <Button
      onPress={() => {
        console.log("yo");
      }}
      title="Hello Button"
    />
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
