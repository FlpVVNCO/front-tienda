import { createTheme, alpha, getContrastRatio } from "@mui/material/styles";

const primaryPurple = "#6200EE";
const secondaryRed = "#FF1B74";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
    },
    primary: {
      main: primaryPurple,
      light: alpha(primaryPurple, 0.6),
      dark: "#6c0fdf",
    },
    secondary: {
      main: secondaryRed,
      dark: "#9d004e",
    },
    success: {
      main: "#14a741",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
