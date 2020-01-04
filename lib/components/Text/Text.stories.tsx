import React from "react";

import { createStyledComponent } from "../../helpers";
import { Text } from ".";
import { DesignSystemProvider } from "..";

export default {
  title: "Text"
};

const TextContainer = createStyledComponent("div")(c => ({
  backgroundColor: c.theme.colors.backgroundPrimary
}));

export const text = (): React.ReactElement => (
  <DesignSystemProvider>
    <TextContainer>
      <Text>sup?</Text>
    </TextContainer>
  </DesignSystemProvider>
);
