import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { TableOfContents } from "./TableOfContents";

import * as theme from "../../themes/colors";

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
      text: "Design principles by which we structure and format our design system. Additionally defining development styles and considerations for relevant components and projects.",
      links: [
        { link: "?path=/docs/overview-principles--docs#core-considerations", name: "Core Considerations" },
        { link: "?path=/docs/overview-principles--docs#structure-and-formatting", name: "Structure and Formatting" },
      ],
    },
    {
      title: "Get Started",
      text: "Guide on how to download, use, and contribute to MAPC Components components!",
      links: [
        { link: "?path=/docs/overview-get-started--docs#how-to-use-mapc-components", name: "How to use" },
        { link: "?path=/docs/overview-get-started--docs#contributing", name: "Contributing" },
      ],
    },
    {
      title: "Themes",
      text: "Set of style definition to standardize color palettes, type fonts, and various associated interaction stylings; Theme sets for streamlining MAPC compliant styling of MAPC Components and custom elements",
      links: [
        { link: "?path=/docs/overview-themes--docs#color-palettes", name: "Color Palettes" },
        { link: "?path=/docs/overview-themes--docs#general-color-family", name: "Font Typesets" },
      ],
    },
  ],
  Themes: theme.blueTheme,
  Height: "500px",
};
