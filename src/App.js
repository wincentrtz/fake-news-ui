import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import Layout from './pages/layouts';
import routes from './routes'
import configs from './configs'

console.log(configs.colors)

const theme = createMuiTheme({
  palette: configs.colors,
  typography: { useNextVariants: true },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Switch>
          {routes.map(route => (
            <Route key={route.url} path={route.url} render={route.component} />
          ))}
        </Switch>
      </Layout>
    </MuiThemeProvider>
  );
}

export default App;
