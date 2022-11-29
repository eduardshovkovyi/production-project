import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa cupiditate dolore fuga, ipsa labore. Accusamus aliquam autem excepturi fugit harum iste maiores molestiae molestias quod quos, temporibus velit vitae!",
};
