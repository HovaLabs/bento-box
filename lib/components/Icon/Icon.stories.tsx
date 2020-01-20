import React from "react";
// import { View } from "react-native";
import styled from "styled-components";
import { Spinner } from "styled-icons/fa-solid/Spinner";
import { DesignSystemProvider } from "..";
import { HovaLabsLogo } from "../..";

import { Icon } from ".";

export default {
  title: "Icon",
};

const StoryContainer = styled("div")`
  background: ${p => p.theme.colors.backgroundPrimary};
`;

export const text = (): React.ReactElement => (
  <DesignSystemProvider>
    <StoryContainer>
      <Icon IconComponent={Spinner} size={32} />
      <Icon
        IconComponent={Spinner}
        size={32}
        onPress={() => console.log("heyo")}
      />
      <Icon
        IconComponent={HovaLabsLogo}
        size={100}
        onPress={() => console.log("heyo")}
      />
    </StoryContainer>
  </DesignSystemProvider>
);
