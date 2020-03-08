import React from "react";
import styled from "styled-components";
import { Spinner } from "styled-icons/fa-solid";
import { actions } from "@storybook/addon-actions";
import { DesignSystemProvider } from "..";
import * as Icons from "../Icons";
import { Text } from "../Text";
import { Icon } from ".";

const { HovaLabsLogo } = Icons;

export default {
  title: "Icon | Icon",
};

const StoryContainer = styled("div")`
  background: ${p => p.theme.colors.background};
  padding: ${p => p.theme.spacings.xl}px;
`;

const ResponsiveIcon = styled(Icon).attrs(p => ({
  size: p.theme.responsiveValue({
    s: 38,
    l: 70,
  })(p),
  IconComponent: HovaLabsLogo,
  hoverColor: p.theme.colors.secondary,
}))`
  * {
    transition: all 100ms;
  }
`;

export const icon = (): React.ReactElement => (
  <DesignSystemProvider>
    <StoryContainer>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gridGap: 32,
        }}
      >
        {Object.entries(Icons).map(([name, IconComponent]) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon IconComponent={IconComponent} />
            <Text style={{ padding: 8 }}>{name}</Text>
          </div>
        ))}
      </div>
      <ResponsiveIcon />
      <ResponsiveIcon onPress={() => {}} />
      <Icon IconComponent={Spinner} size={32} />
      <Icon
        IconComponent={Spinner}
        size={32}
        onPress={() => actions("pressed")}
      />
      <Icon
        IconComponent={HovaLabsLogo}
        size={100}
        onPress={() => actions("pressed")}
      />
    </StoryContainer>
  </DesignSystemProvider>
);
