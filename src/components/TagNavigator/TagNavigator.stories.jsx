import React from "react";

import { TagNavigator } from './TagNavigator';

const meta = {
  component: TagNavigator,
};

export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: () => <TagNavigator />,
};
