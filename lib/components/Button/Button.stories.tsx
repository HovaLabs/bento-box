import React from "react";

import { Button } from "./";
import { ThemeContextContainer } from "..";
export default {
  title: "My Button"
};

export const text = () => <Button onPress={() => { console.log('yo') }}>Hello Button</Button>;

export const emoji = () => (
  <ThemeContextContainer>
    <Button onPress={() => { console.log('yo') }} variant="primary" size="m" title="😀 😎 👍 💯" />
  </ThemeContextContainer>
);
