import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  MuiThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Router,
  Route,
  Switch,
} from 'react-router';

import theme from './theme';
import history from './history';

import Login from './components/Login';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/login"
          component={Login}
        />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
