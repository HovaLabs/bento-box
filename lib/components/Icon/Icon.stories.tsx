import React from "react";
import styled from "styled-components";
import { Spinner } from "styled-icons/fa-solid/Spinner";
import { DesignSystemProvider } from "..";
import { HovaLabsLogo } from "../Icons";

import { Icon } from ".";

export default {
  title: "Icon",
};

const StoryContainer = styled("div")`
  background: ${p => p.theme.colors.backgroundPrimary};
`;

const ResponsiveIcon = styled(Icon).attrs(p => ({
  size: p.theme.responsiveValue({
    s: 38,
    l: 70,
  })(p),
  IconComponent: HovaLabsLogo,
  hoverColor: p.theme.colors.accentSecondary,
}))`
  * {
    transition: all 100ms;
  }
`;

export const text = (): React.ReactElement => (
  <DesignSystemProvider>
    <StoryContainer>
      <ResponsiveIcon />
      <ResponsiveIcon onPress={() => {}} />
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
