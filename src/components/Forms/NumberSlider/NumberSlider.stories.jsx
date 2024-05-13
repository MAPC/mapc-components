import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { NumberSlider } from "./NumberSlider";

import * as theme from "../../../themes/colors";

{
  /* decorators for decorating component with router capabilities, not necessary for this component */
}
const meta = {
  component: NumberSlider,
  title: "Components/Forms/NumberSlider",
};
export default meta;

let rangeValue = 60;
function handleChange(value) {
  rangeValue = value;
}

export const FullSlider = (args) => <NumberSlider {...args} />;
FullSlider.args = {
  min: 50,
  max: 100,
  value: rangeValue,
  disabled: false,
  percentage: false,
  onChange: handleChange,
  theme: theme.yellowTheme,
  numericControl: true,
  stepButtons: true,
  isValid: false,
  isInvalid: false,
};

rangeValue = 0;
export const NoIncrementSlider = (args) => <NumberSlider {...args} />;
NoIncrementSlider.args = {
  min: 0,
  max: 1,
  value: rangeValue,
  disabled: false,
  percentage: false,
  onChange: handleChange,
  theme: theme.blueTheme,
  numericControl: true,
  stepButtons: false,
  isValid: false,
  isInvalid: false,
};
rangeValue = 60;
export const NoInputSlider = (args) => <NumberSlider {...args} />;
NoInputSlider.args = {
  min: 50,
  max: 100,
  value: rangeValue,
  disabled: false,
  percentage: false,
  onChange: handleChange,
  theme: theme.blueTheme,
  numericControl: false,
  stepButtons: true,
};

export const OnlySlider = (args) => <NumberSlider {...args} />;
OnlySlider.args = {
  min: 50,
  max: 100,
  value: rangeValue,
  disabled: false,
  percentage: false,
  onChange: handleChange,
  theme: theme.blueTheme,
  numericControl: false,
  stepButtons: false,
};
