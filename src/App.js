import React from 'react';
import './App.css';
import Layout from './pages/layouts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { Switch, Route } from 'react-router-dom';
import routes from './routes'

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: '#f50057' }
  },
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
