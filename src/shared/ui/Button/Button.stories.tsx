import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, ButtonSize, ButtonTheme } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR,
};

export const CLEAR_INVERTED = Template.bind({});
CLEAR_INVERTED.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const Background = Template.bind({});
Background.args = {
  children: "Text",
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: "Text",
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M,
};
