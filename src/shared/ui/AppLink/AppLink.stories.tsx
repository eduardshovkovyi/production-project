import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Text",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Text",
  theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
  children: "Text",
  theme: AppLinkTheme.RED,
};
