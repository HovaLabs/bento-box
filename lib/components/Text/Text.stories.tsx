import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import { Text } from ".";
import { DesignSystemProvider } from "..";

export default {
  title: "Text",
};

const TextContainer = styled(View)`
  background-color: ${p => p.theme.colors.backgroundPrimary};
`;

const yearString = `Copyright Hova Labs 2019 - ${new Date()
  .getFullYear()
  .toString()}`;

export const text = (): React.ReactElement => (
  <DesignSystemProvider>
    <TextContainer>
      <Text>sup?</Text>
      <Text color="accentSecondary">yo</Text>
      <Text>{yearString}</Text>
    </TextContainer>
  </DesignSystemProvider>
);
