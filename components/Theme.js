import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let Theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    }
  },
  palette: {
    type: "dark",
    primary: {
      main: "#fdd835",
      contrastText: "#121212"
    },
    secondary: {
      main: "#fff9c4",
      contrastText: "#121212"
    },
    background: {
      default: "#212121",
      paper: "#121212"
    },
    text: {
      primary: "#fdd835"
    }
  }
});

Theme = responsiveFontSizes(Theme);

export default Theme;

//todo optimize material imports - care for third level indentation
