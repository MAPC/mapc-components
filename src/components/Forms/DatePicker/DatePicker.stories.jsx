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
  title: "Components/DatePicker",
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

export const DatePickerStory = (args) => <DatePicker {...args} />;
DatePickerStory.args = {
  text: "Due Date",
  date: new Date("June 10, 2010").toISOString().split("T")[0],
  onChange: handleChange,
  theme: theme.greenTheme,
};
