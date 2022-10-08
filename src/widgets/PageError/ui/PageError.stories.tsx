import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PageError } from "widgets/PageError";

export default {
  title: "widgets/PageError ",
  component: PageError,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
  <PageError {...args} />
);

export const Default = Template.bind({});
Default.args = {};
