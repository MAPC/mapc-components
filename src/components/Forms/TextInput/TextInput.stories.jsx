import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { TextInput } from "./TextInput";

import * as colorTheme from "../../../themes/colors";

{
  /* decorators for decorating component with router capabilities, not necessary for this component */
}
const meta = {
  component: TextInput,
  title: "Components/Forms/TextInput",
};
export default meta;

function handleChange(event) {
  console.log(event.target.value);
}

function validation(value) {
  console.log(value);
  if (value.length < 15) {
    return true;
  }
  return false;
}

export const TextInputStory = (args) => <TextInput {...args} />;
TextInputStory.args = {
  text: "Hello World!",
  readOnly: false,
  // type: "number",
  disabled: false,
  validate: validation,
  isInvalid: false,
  theme: colorTheme.blueTheme,
  onChange: handleChange,
};
