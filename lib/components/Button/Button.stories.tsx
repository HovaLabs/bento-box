import React from "react";

import { Button } from "./";
import { ThemeContextContainer } from "..";
export default {
  title: "My Button"
};

export const text = () => (
  <ThemeContextContainer>
    <Button onPress={() => { console.log('yo') }} title="Hello Button"></Button>
  </ThemeContextContainer>
);

export const emoji = () => (
  <ThemeContextContainer>
    <Button onPress={() => { console.log('yo') }} variant="primary" size="m" title="😀 😎 👍 💯" />
  </ThemeContextContainer>
);
