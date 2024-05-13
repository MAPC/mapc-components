export const mapc_green = { "MAPC Green": "#78BE20", "Logo Green": "#C7E2AD" };
export const mapc_blue = { "MAPC Blue": "#012169", "Logo Blue": "#004A91" };
export const mapc_yellow = { "Clean Energy Yellow": "#E8BA1C", "Handout Orange": "#F47B20" };

export const oranges = { Melon: "#fed095", Peach: "#f9a659", Orange: "#f47b20", Clay: "#a94110", Lobster: "#5e0600" };
export const yellows = { Cream: "#fff2be", Butter: "#f6dd7d", Sunshine: "#e7bb20", Bronze: "#6f570b", Coffee: "#332500" };
export const greens = { Serbert: "#c8e2ae", Spring: "#9acf87", Lime: "#78be43", Seaweed: "#387d3c", Elm: "#004b24" };
export const blues = { Ice: "#d4effc", Lake: "#92cfe8", Winter: "#00a2ce", Denim: "#104c90", Ocean: "#012169 " };
export const grays = { Paper: "#ffffff", Cloudy: "#bac0c2", Stone: "#6f7476", Charcoal: "#3a3f40", Galaxy: "#0b1618" };

export const grayTheme = {
  primary: grays.Cloudy,
  secondary: grays.Galaxy,
  tertiary: grays.Paper,
  quaternary: grays.Charcoal,

  special: grays.Stone,
};
export const blueTheme = {
  primary: blues.Lake,
  secondary: blues.Ocean,
  tertiary: blues.Ice,
  quaternary: blues.Denim,

  special: blues.Winter,
  disabled: grayTheme,
};

export const orangeTheme = {
  primary: oranges.Peach,
  secondary: oranges.Lobster,
  tertiary: oranges.Melon,
  quaternary: oranges.Clay,

  special: oranges.Orange,
  disabled: grayTheme,
};

export const greenTheme = {
  primary: greens.Spring,
  secondary: greens.Elm,
  tertiary: greens.Serbert,
  quaternary: greens.Seaweed,

  special: greens.Lime,
  disabled: grayTheme,
};

export const yellowTheme = {
  primary: yellows.Butter,
  secondary: yellows.Coffee,
  tertiary: yellows.Cream,
  quaternary: yellows.Bronze,

  special: yellows.Sunshine,
  disabled: grayTheme,
};
