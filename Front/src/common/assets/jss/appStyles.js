import { createTheme } from "@material-ui/core";

// variables
// ==> Dimensions
const maxWidth = "100%";

// ==> Colors
const primaryColor = "#38c7d5";
const primaryColorHover = "#1c9ca9";
const secondaryGradientColor = "#7fe2ee";
const tertiaryColor = "#333542";
const darkTertiaryColor = "#22232c";
const fontColor = "#1a1b39";
const iconColor = "#3f51b5";
const borderColor = "#9b9bff";
const dangerColor = "#f33223";
const successColor = "#449d48";
const warnColor = "#CCA300 ";
const orangeColor = "#d7a134 ";
const silverColor = "#b0bac0 ";
const whiteColor = "#ffffff";
const lightGrayColor = "#f7f8fb";
const blackColor = "#000";
const darkBlue = "#3e5b86";
const mainBlue = "#2a81ff";
const mainBlue_hover = "#2069d1";
const grayColor = "#9fafc7";
const tealColor = "#00695f";
const tealColorHover = "#009688";

// ==> Shades
const cardShadow = "0 7px 15px 0 rgba(0, 0, 0, 0.05)";

// ==> Theme
export const theme = createTheme({
  typography: {
    fontFamily: "Cairo",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "Cairo",
      },
    },
  },
});

export {
  // diminsions
  maxWidth,
  // palette
  primaryColor,
  primaryColorHover,
  secondaryGradientColor,
  tertiaryColor,
  darkTertiaryColor,
  fontColor,
  iconColor,
  borderColor,
  dangerColor,
  successColor,
  warnColor,
  lightGrayColor,
  orangeColor,
  silverColor,
  darkBlue,
  mainBlue,
  grayColor,
  whiteColor,
  mainBlue_hover,
  blackColor,
  tealColor,
  tealColorHover,
  // Shades
  cardShadow,
};
