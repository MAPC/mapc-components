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
      // storySort: (a, b) => {
      //   const order = ["Overview", "Media", "Components", "Misc"];
      //   return order.indexOf(a[1].kind) - order.indexOf(b[1].kind);
      // },
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
