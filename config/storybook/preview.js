import { addDecorator } from "@storybook/react";
import { withThemes } from "storybook-addon-themes/react";

import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

import { Theme } from "../../src/app/providers/ThemeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "Light",
    list: [
      { name: "Light", class: ["app", "light"] },
      { name: "Dark", class: ["app", "dark"] },
    ],
  },
};

addDecorator(withThemes);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
