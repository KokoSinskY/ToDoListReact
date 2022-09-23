import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#41C8AE",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontSize: "2em",
    },
    h2: {
      fontSize: "1.5em",
    },
    h3: {
      fontSize: "1.17em",
    },
    h4: {
      fontSize: "1em",
    },
    h5: {
      fontSize: "0.83em",
    },
    h6: {
      fontSize: "0.67em",
    },
  },
});
