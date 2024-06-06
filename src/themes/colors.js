export const mapcGreen = { "MAPC Green": "#78BE20", "Logo Green": "#C7E2AD" };
export const mapcBlue = { "MAPC Blue": "#012169", "Logo Blue": "#004A91" };
export const mapcYellow = { "Clean Energy Yellow": "#E8BA1C", "Handout Orange": "#F47B20" };

export const oranges = { Melon: "#fed095", Peach: "#f9a659", Orange: "#f47b20", Clay: "#a94110", Lobster: "#5e0600" };
export const yellows = { Cream: "#fff2be", Butter: "#f6dd7d", Sunshine: "#e7bb20", Bronze: "#6f570b", Coffee: "#332500" };
export const greens = { Serbert: "#c8e2ae", Spring: "#9acf87", Lime: "#78be43", Seaweed: "#387d3c", Elm: "#004b24" };
export const blues = { Ice: "#d4effc", Lake: "#92cfe8", Winter: "#00a2ce", Denim: "#104c90", Ocean: "#012169 " };
export const grays = { Paper: "#ffffff", Cloudy: "#bac0c2", Stone: "#6f7476", Charcoal: "#3a3f40", Galaxy: "#0b1618" };

// MC 2050 colors
export const MCYellows = { Craft: "#FCF8ED", Sun: "#FFB624", Mustard: "#DB9E00", Bistre: "#3D2A08" };
export const MCOranges = { Craft: "#FCF8ED", Cranberry: "#FF5A50", Brick: "#FF3824", Rust: "#52000D" };

export const MCBlues = {
  Gossamer: "#F2F5FF",
  Sky: "#8ACCFF",
  WinterSky: "#0063E6",
  BayBlue: "#00256E",
};
export const MCLightBlues = {
  Gossamer: "#F2F5FF",
  ClearWater: "#4DDCF2",
  Glass: "#0097C4",
  Indigo: "#101436",
};
export const MCTeals = { RobinsEgg: "#ECFFFA", Turqoise: "#BAFFF9", Teal: "#00C7B3", Jungle: "#00332D" };
export const MCGreens = { RobinsEgg: "#ECFFFA", Green: "#00F099", Apple: "#00BF64", Leaf: "#006E47" };
export const MCMaroons = { LightBlush: "#FCF2FB", Fuchsia: "#C7004E", Burgundy: "#4D001A", Maroon: "#700025" };
export const MCPurples = {
  LightBlush: "#FCF2FB",
  Purple: "#832FCC",
  Violet: "#472B78",
  DarkPurple: "#2C003B",
};
export const MCGrays = { WarmGray: "#EFEFE7", Black: "#000000" };

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
