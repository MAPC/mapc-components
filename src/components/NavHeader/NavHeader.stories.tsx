import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import NavHeader from "./NavHeader";

const meta: Meta<typeof NavHeader> = {
  component: NavHeader,
  title: "Components/NavHeader",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof NavHeader>;

export const TitleAndRoutes: Story = (args) => <NavHeader {...args} />;
TitleAndRoutes.args = {
  title: { key: "", path: "/", label: "Home Page" },
  routes: [
    { key: "page1", path: "/page1", label: "Page 1" },
    { key: "page2", path: "/page2", label: "Page 2" },
    { key: "page3", path: "/page3", label: "Page 3" },
  ],
};

export const TitleOnly: Story = (args) => <NavHeader {...args} />;
TitleOnly.args = {
  title: { key: "", path: "/", label: "Home Page" },
};

export const RoutesOnly: Story = (args) => <NavHeader {...args} />;
RoutesOnly.args = {
  routes: [
    { key: "page1", path: "/page1", label: "Page 1" },
    { key: "page2", path: "/page2", label: "Page 2" },
    { key: "page3", path: "/page3", label: "Page 3" },
  ],
};
