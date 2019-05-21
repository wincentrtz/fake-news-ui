import React from 'react';
import './App.css';
import Layout from './pages/layouts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: '#f50057' }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout />
    </MuiThemeProvider>
  );
}

export default App;
