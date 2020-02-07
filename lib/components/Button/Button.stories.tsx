import React from "react";
import styled, { css } from "styled-components";

import { Button } from ".";
import { DesignSystemProvider } from "..";

export default {
  title: "My Button",
};

const Foo = styled.div`
  color: red;
  ${p =>
    p.theme.responsiveValue({
      s: css`
        background-color: pink;
      `,
      m: css`
        background-color: green;
      `,
      l: css`
        display: none;
      `,
    })}
`;

export const text = () => (
  <DesignSystemProvider>
    <Foo>Helllllllo</Foo>
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
