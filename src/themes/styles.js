import { createGlobalStyle } from "styled-components";

import * as color_theme from "./colors";

export const themed_link = (theme) => {
  // takes theme color, returns link styling
  return { textDecoration: "none", color: theme.special };
};

export const mapc_global_style = createGlobalStyle<{ $whiteColor?: boolean; }>`
  body {
    color: ${props => (props.$whiteColor ? 'white' : 'black')};
  }
`