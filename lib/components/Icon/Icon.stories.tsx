import React from "react";
// import { View } from "react-native";
// import styled from "styled-components";
import { Spinner } from "styled-icons/fa-solid/Spinner";

import { Icon } from ".";
import { DesignSystemProvider } from "..";

export default {
  title: "Icon",
};

export const text = (): React.ReactElement => (
  <DesignSystemProvider>
    <Icon IconComponent={Spinner} size={32} />
    <Icon
      IconComponent={Spinner}
      size={32}
      onPress={() => console.log("heyo")}
    />
  </DesignSystemProvider>
);
