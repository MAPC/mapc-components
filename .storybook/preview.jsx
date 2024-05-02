import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Overview",
          ["Introduction", "Get Started", "Principles", "Themes", "Resources & Tools", "Examples"],
          "Media",
          "Components",
          "Misc",
          ["Contributing", "Templates"],
        ],
      },
    },
    decorators: [
      (Story) => (
        <div
          className="test"
          style={{ margin: "1em" }}
        >
          <Story />
        </div>
      ),
    ],
  },
};

export default preview;
