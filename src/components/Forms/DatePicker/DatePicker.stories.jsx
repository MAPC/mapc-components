import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { DatePicker } from "./DatePicker";

import * as theme from "../../../themes/colors";

{
  /* decorators for decorating component with router capabilities, not necessary for this component */
}
const meta = {
  component: DatePicker,
  title: "Components/Forms/DatePicker",
};
export default meta;

function handleChange(value) {
  console.log(value);
}

function validation(value) {
  const year = new Date(value).getFullYear();

  if (year >= "2010") {
    return true;
  }
  return false;
}

export const DatePickerStory = (args) => <DatePicker {...args} />;
DatePickerStory.args = {
  text: "Due Date",
  date: new Date("June 10, 2010").toISOString().split("T")[0],
  onChange: handleChange,
  theme: theme.greenTheme,
  validate: validation,
};
