import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { DesignSystemProvider } from "..";
import { Input } from "./Input";
import { Text } from "../Text";

export default {
  title: "Input",
  decorators: [withKnobs],
};

export const inputs = (): React.ReactElement => (
  <DesignSystemProvider>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gridGap: 32,
      }}
    >
      <div>
        <Input type="checkbox" />
        <div>
          <Text>checkbox</Text>
        </div>
      </div>
      <div>
        <Input type="date" />
        <div>
          <Text>date</Text>
        </div>
      </div>
      <div>
        <Input type="file" />
        <div>
          <Text>file</Text>
        </div>
      </div>
      <div>
        <Input type="number" />
        <div>
          <Text>number</Text>
        </div>
      </div>
      <div>
        <Input
          type="radio"
          options={[
            { title: "foo", value: "foo" },
            { title: "bar", value: "bar" },
          ]}
        />
        <div>
          <Text>radio</Text>
        </div>
      </div>
      <div>
        <Input
          type="select"
          options={[
            { title: "foo", value: "foo" },
            { title: "bar", value: "bar" },
          ]}
        />
        <div>
          <Text>select</Text>
        </div>
      </div>
      <div>
        <Input type="text" />
        <div>
          <Text>text</Text>
        </div>
      </div>
      <div>
        <Input type="time" />
        <div>
          <Text>time</Text>
        </div>
      </div>
      <div>
        <Input type="toggle" />
        <div>
          <Text>toggle</Text>
        </div>
      </div>
      <div>
        <Input />
        <div>
          <Text>default (no type prop passed)</Text>
        </div>
      </div>
    </div>
  </DesignSystemProvider>
);
