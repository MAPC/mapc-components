import { create } from "@storybook/theming/create";
import mapclogo from "../src/assets/mapc-fullcolor.png";
import * as theme from "../src/themes/colors";

export default create({
  base: "light",
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "MAPC Components",
  brandUrl: "https://www.mapc.org/",
  brandImage: mapclogo,
  brandTarget: "_self",

  colorPrimary: theme.mapc_blue["MAPC Blue"],
  //   colorSecondary: "#004b24",
  //   colorSecondary: "#c8e2ae",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#585C6D",
  appBorderRadius: 4,

  //   // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  //   // Toolbar default and active colors
  barTextColor: "#10162F",
  barSelectedColor: "#585C6D",
  textMutedColor: "#104c90",
  //   barHoverColor: "#585C6D",
  //   barBg: "#ffffff",

  //   // Form colors
  //   inputBg: "#ffffff",
  //   inputBorder: "#10162F",
  //   inputTextColor: "#10162F",
  //   inputBorderRadius: 2,
});
