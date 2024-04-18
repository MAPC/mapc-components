import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { TableOfContents } from "./TableOfContents";

const meta = {
  component: TableOfContents,
  title: "Components/TableOfContents",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

export const IntroductionTable = (args) => <TableOfContents {...args} />;
IntroductionTable.args = {
  TableData: [
    {
      title: "Principles",
      text: "text onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext one",
      links: ["link one", "linkthree"],
    },
    {
      title: "Get Started",
      text: "text onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext onetext one",
      links: ["link one", "linkthree"],
    },
    { title: "Miscellaneous", text: "text two", links: ["link two"] },
  ],
  Themes: {},
  Height: "500px",
};
