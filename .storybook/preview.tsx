import React from "react";

import type { Preview } from "@storybook/react";

import "bootstrap/dist/css/bootstrap.min.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Overview", ["Introduction", "Get Started", "Principles", "Themes", "Examples"], "Media", "Components", "Misc", ["Contributing", "Templates"]],
      },
    },
    decorators: [
      (Story) => (
        <div
          className="test"
          style={{ margin: "2em" }}
        >
          <Story />
        </div>
      ),
    ],
  },
};

export default preview;
