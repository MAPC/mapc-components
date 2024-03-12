import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TestButton } from "./TestButton";

const meta: Meta<typeof TestButton> = {
  component: TestButton,
  title: "MAPC/TestButton",
};

export default meta;
type Story = StoryObj<typeof TestButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <TestButton />,
};
