import { extendTheme } from "native-base";

export const THEMES = extendTheme({
  colors: {
    gray: {
      300: "#8d8d99",
    },
    blue: {
      500: "#339cff",
      800: "#0b3b60",
    },
    white: "#fff",
    black: "#000",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
});
