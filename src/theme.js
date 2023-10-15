import { createTheme } from "@material-ui/core/styles";

const primaryBlue = '#9EDDFF';
const secondaryBlue = '#6499E9'

export const theme = createTheme({
  palette: {
    common: {
      primaryBlue,
      secondaryBlue 
    },
    primary: {
      main: primaryBlue
    },
    secondary: {
      main: secondaryBlue
    },
  },
})