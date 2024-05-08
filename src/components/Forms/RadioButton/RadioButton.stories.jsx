import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { RadioButton } from "./RadioButton";

import * as theme from "../../../themes/colors";

{
  /* decorators for decorating component with router capabilities, not necessary for this component */
}
const meta = {
  component: RadioButton,
  title: "Components/Forms/RadioButton",
};
export default meta;

let checkValue = {};
function handleChange(value) {
  console.log(value);
}

export const Radio = (args) => <RadioButton {...args} />;
Radio.args = {
  label: "radio",
  type: "radio",
  theme: theme.greenTheme,
  onChange: handleChange,
  disabled: false,
};

export const CheckBox = (args) => <RadioButton {...args} />;
CheckBox.args = {
  label: "checkbox",
  type: "checkbox",
  theme: theme.orangeTheme,
  onChange: handleChange,
  disabled: false,
};
