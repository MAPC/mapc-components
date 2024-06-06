import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { SelectDropdown } from "./SelectDropdown";

import * as theme from "../../../themes/colors";

{
  /* decorators for decorating component with router capabilities, not necessary for this component */
}
const meta = {
  component: SelectDropdown,
  title: "Components/Forms/SelectDropdown",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

function handleChange(value) {
  console.log(value);
}

export const Dropdown = (args) => <SelectDropdown {...args} />;
Dropdown.args = {
  disabled: false,
  options: ["one", "two", "three"],
  type: "dropdown",
  title: "Dropdown",
  text: "Hello World!",
  targets: ["#one", "#two", "#three"],
  onChange: handleChange,
  theme: theme.greenTheme,
};

export const Select = (args) => <SelectDropdown {...args} />;
Select.args = { disabled: false, options: ["one", "two", "three"], type: "select", title: "Selection", onChange: handleChange, theme: theme.yellowTheme };
