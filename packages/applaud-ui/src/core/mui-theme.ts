import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const COLORS = {
  primary: "#FFFF00",
  secondary: "#CCC",
  background: "#13191C",
  paperBackground: "#263238",
  success: "#00ff00",
  error: "#F44336",
  default: "#31405C",
  white: "#FFFFFF"
};

export const themeOptions: ThemeOptions = {
  typography: {
    // useNextVariants: true,
    fontFamily:
      'Fira Mono, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  palette: {
    type: "dark",
    background: {
      default: COLORS.background,
      paper: COLORS.paperBackground
    },
    primary: {
      main: COLORS.primary
    },
    secondary: {
      main: COLORS.secondary
    }
  }
  // palette: {
  //   primary: {
  //     main: "#3FBEED",
  //     light: "#7EF1FF",
  //     dark: "#008EBA",
  //     contrastText: "#000"
  //   },
  //   secondary: {
  //     main: "#EC6C3D",
  //     light: "#FF9D6A",
  //     dark: "#B43C11",
  //     contrastText: "#000"
  //   }
  // },
  // typography: {
  //   fontSize: 13,
  //   fontFamily: `"Lato",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`
  // }
};

const theme = createMuiTheme(themeOptions);

export default theme;
