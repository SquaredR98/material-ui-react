import { createTheme } from "@material-ui/core/styles";

const primaryBlue = "#9EDDFF";
const secondaryBlue = "#6499E9";

export const theme = createTheme({
  palette: {
    common: {
      primaryBlue,
      secondaryBlue,
    },
    primary: {
      main: primaryBlue,
    },
    secondary: {
      main: secondaryBlue,
    },
    backgroundEstimate: {
      background: "hsla(205, 46%, 30%, 1)",
      background:
        "linear-gradient(0deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%)",
      background:
        "-moz-linear-gradient(0deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%)",
      background:
        "-webkit-linear-gradient(0deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%)",
      '&:hover': {
        background:
        "linear-gradient(0deg, hsla(260, 29%, 36%, 1) 0%, hsla(205, 46%, 30%, 1) 100%)",
      background:
        "-moz-linear-gradient(0deg, hsla(260, 29%, 36%, 1) 0%, hsla(205, 46%, 30%, 1) 100%)",
      background:
        "-webkit-linear-gradient(0deg, hsla(260, 29%, 36%, 1) 0%, hsla(205, 46%, 30%, 1) 100%)",
      }
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "1rem",
    },
    estimateButton: {
      fontSize: "1rem",
      textTransform: "none",
    },
  },
});
