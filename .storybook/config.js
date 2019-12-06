import { configure } from "@storybook/react";
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo({
    inline: true
}));

// automatically import all files ending in *.stories.js
configure(require.context("../lib", true, /\.stories\.tsx$/), module);
