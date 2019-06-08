import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Route } from "react-router-dom";

import Layout from "./pages/templates/Layout";
import Login from "./pages/Login";
import configs from "./configs";

const theme = createMuiTheme({
  palette: configs.colors,
  typography: { useNextVariants: true }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Layout} />
    </MuiThemeProvider>
  );
};

export default App;
