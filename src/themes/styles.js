import { createGlobalStyle } from "styled-components";

import * as colorTheme from "./colors";

export const themed_link = (theme) => {
  // takes theme color, returns link styling
  return { textDecoration: "none", color: theme.special };
};

export const MapcGlobalStyle = createGlobalStyle`
  body {
    font-family: "Calibre-Regular, SwiftNeueLTPro-Regular";
  }
`;
