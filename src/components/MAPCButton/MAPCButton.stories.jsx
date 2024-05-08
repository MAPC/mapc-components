import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { MAPCButton } from "./MAPCButton";

import * as theme from "../../themes/colors";

{
  /* decorators for decorating component with router capabilities, not necessary for this component */
}
const meta = {
  component: MAPCButton,
  title: "Components/Forms/MAPC Button",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

function clickFunction(e) {
  console.log("hello world");
}

export const JuicyButton = (args) => <MAPCButton {...args} />;
JuicyButton.args = {
  text: "Juicy",
  main: true,
  disabled: false,
  juice: true,
  onClick: clickFunction,
  theme: theme.orangeTheme,
};

export const NormalButton = (args) => <MAPCButton {...args} />;
NormalButton.args = {
  text: "Normal",
  onClick: clickFunction,
  theme: theme.blueTheme,
};
