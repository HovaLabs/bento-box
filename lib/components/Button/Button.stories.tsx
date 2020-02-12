import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Button } from ".";
import { DesignSystemProvider } from "..";

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const text = (): React.ReactElement => (
  <DesignSystemProvider>
    <div style={{ margin: 16 }}>
      <Button
        disabled={boolean("Disabled", false)}
        onPress={action("disabled button clicki")}
        title="Hello Primary Button"
      />
    </div>
    <div style={{ margin: 16 }}>
      <Button
        variant="secondary"
        disabled={boolean("Disabled", false)}
        onPress={action("disabled secondard button click")}
        title="Hello Secondary Button"
      />
    </div>
    <div style={{ margin: 16 }}>
      <Button
        variant="tertiary"
        disabled={boolean("Disabled", false)}
        onPress={action("disabled tertiary button click")}
        title="Hello Tertiary Button"
      />
    </div>
  </DesignSystemProvider>
);

export const emoji = () => (
  <DesignSystemProvider>
    <Button
      onPress={action("emoji button click")}
      variant="primary"
      size="m"
      title="😀 😎 👍 💯"
    />
  </DesignSystemProvider>
);
