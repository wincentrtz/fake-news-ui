import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";

import Layout from "./pages/templates/Layout";
import TimelineLayout from "./pages/templates/TimelineLayout";
import Login from "./pages/Login";
import configs from "./configs";

const theme = createMuiTheme({
  palette: configs.colors,
  typography: { useNextVariants: true }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Layout} />
        <Route path="/" component={TimelineLayout} />
      </Switch>
    </MuiThemeProvider>
  );
};

export default App;
