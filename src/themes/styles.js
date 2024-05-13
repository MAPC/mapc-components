import { createGlobalStyle } from "styled-components";

import * as colorTheme from "./colors";

export const themed_link = (theme) => {
  // takes theme color, returns link styling
  return { textDecoration: "none", color: theme.special };
};

export const MapcGlobalStyle = createGlobalStyle`
  body {
    -moz-font-feature-settings:    "kern" 1; 
    -ms-font-feature-settings:     "kern" 1; 
    -o-font-feature-settings:      "kern" 1; 
    -webkit-font-feature-settings: "kern" 1; 
    font-feature-settings:         "kern" 1;
    font-kerning: normal;
    font-family: "Calibre-Regular", sans-serif;
  }

  p {
    font-family: "Calibre-Regular", sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "SwiftNeueLTPro-Regular", serif;
  }
`;
