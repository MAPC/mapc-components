import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { MultiThumbSlider } from "./MultiThumbSlider";

import * as theme from "../../../themes/colors";

{
  /* decorators for decorating component with router capabilities, not necessary for this component */
}
const meta = {
  component: MultiThumbSlider,
  title: "Components/Forms/MultiThumbSlider",
};
export default meta;

let rangeValue = 30;
function handleChange(value) {
  console.log(value);
  rangeValue = value;
}

export const FullSlider = (args) => <MultiThumbSlider {...args} />;
FullSlider.args = {
  min: 0,
  max: 100,
  leftValue: rangeValue,
  rightValue: 100,
  disabled: false,
  percentage: false,
  onChange: handleChange,
  theme: theme.orangeTheme,
  numericControl: true,
};

export const OnlySlider = (args) => <MultiThumbSlider {...args} />;
OnlySlider.args = {
  min: 0,
  max: 100,
  leftValue: rangeValue,
  rightValue: 100,
  disabled: false,
  percentage: false,
  onChange: handleChange,
  theme: theme.orangeTheme,
  numericControl: false,
};

export const DoubleStepSlider = (args) => <MultiThumbSlider {...args} />;
DoubleStepSlider.args = {
  min: 0,
  max: 100,
  leftValue: rangeValue,
  rightValue: 100,
  disabled: false,
  percentage: false,
  onChange: handleChange,
  theme: theme.orangeTheme,
  numericControl: true,
  step: 2,
};
