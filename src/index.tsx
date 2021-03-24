import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "stores/rootStore";
import App from "./App";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Nunito", "Chilanka", "cursive"].join(","),
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
